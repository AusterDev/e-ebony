import type { APIContext } from "astro";
import { DeviceCache, getDevice } from "../../../../lib/auth";
import { apiResponse } from "../../../../types/response";
import { CreateSessionSchema, SyncAnswersSchema } from "../../../../schemas/session";
import prisma from "../../../../lib/prisma";
import type { MockSession } from "../../../../generated/prisma";

export async function GET(ctx: APIContext) {
    const device = await getDevice(ctx);

    if (!device) {
        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Missing deviceID" }), { status: 403 });
    }

    try {
        const session = await prisma.mockSession.findUnique({
            where: { deviceID: device.id },
        });

        if (!session) {
            return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "No active session" }), { status: 403 });
        }

        const answers = await prisma.answer.findMany({
            where: { deviceID: device.id, mockID: session.mockID },
            select: { id: true, questionID: true, optionID: true, mockID: true },
        });

        return new Response(apiResponse(true, { answers }), { status: 200 });
    } catch (error) {
        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Invalid request" }), { status: 400 });
    }
}

export async function POST(ctx: APIContext) {
    const device = await getDevice(ctx);

    if (!device) return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Missing deviceID" }), { status: 403 });

    if (DeviceCache.has(device.id)) {
        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "This device has an ongoing session." }));
    }

    try {
        const data = await ctx.request.json();
        const parsed = CreateSessionSchema.parse(data);

        if (!(await prisma.mock.findFirst({ select: { id: true }, where: { id: parsed.mockID } }))) {
            return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Invalid mockID" }));
        }

        const session = await prisma.mockSession.findUnique({ where: { deviceID: device.id } });
        if (session) return new Response(apiResponse<any>(false, session, { type: "warning", cause: "Session already exists" }));

        const newSession = await prisma.mockSession.create({ data: { mockID: parsed.mockID, deviceID: device.id } });
        DeviceCache.set(newSession.deviceID, device);

        return new Response(apiResponse<MockSession>(true, newSession));
    } catch (error) {
        if (error instanceof Error && "issues" in (error as any)) {
            return new Response(apiResponse<any>(false, null, { type: "validation", cause: (error as any).issues }), { status: 400 });
        }

        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Invalid request" }), { status: 400 });
    }
}

export async function PUT(ctx: APIContext) {
    const device = await getDevice(ctx);

    if (!device) return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Missing deviceID" }), { status: 403 });

    try {
        const data = await ctx.request.json();
        const parsed = SyncAnswersSchema.parse(data);

        const session = await prisma.mockSession.findUnique({ where: { deviceID: device.id }, include: { mock: true } });

        if (!session || session.mockID !== parsed.mockID) {
            return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "No active session for this mock" }), { status: 403 });
        }

        if (isSessionExpired(session)) {
            DeviceCache.delete(device.id);
            await prisma.$transaction([
                prisma.answer.deleteMany({ where: { deviceID: device.id, mockID: session.mockID } }),
                prisma.mockSession.delete({ where: { id: session.id } }),
            ]);
            return new Response(apiResponse<any>(false, null, { type: "time", cause: "Time is up, please submit for evaluation of your last synced answers." }), { status: 403 });
        }

        await Promise.all(
            parsed.answers.map(ans =>
                prisma.answer.upsert({
                    where: { questionID_deviceID: { questionID: ans.questionID, deviceID: device.id } },
                    create: { questionID: ans.questionID, optionID: ans.optionID, deviceID: device.id, mockID: parsed.mockID },
                    update: { optionID: ans.optionID },
                })
            )
        );

        return new Response(apiResponse(true, { synced: parsed.answers.length }), { status: 200 });
    } catch (error) {
        if (error instanceof Error && "issues" in (error as any)) {
            return new Response(apiResponse<any>(false, null, { type: "validation", cause: (error as any).issues }), { status: 400 });
        }

        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Invalid request" }), { status: 400 });
    }
}

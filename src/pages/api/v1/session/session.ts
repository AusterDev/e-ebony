import type { APIContext } from "astro";
import { apiResponse } from "../../../../types/response";
import { CreateSessionSchema, SyncAnswersSchema } from "../../../../schemas/session";
import prisma from "../../../../lib/prisma";
import type { MockSession } from "../../../../generated/prisma";
import { ZodError } from "zod";

function isSessionExpired(session: { createdAt: Date; mock: { totalTimeMins: number } }): boolean {
    const expiryTime = (session.createdAt.getTime() + session.mock.totalTimeMins) * 60 * 1000;
    return Date.now() > expiryTime;
}

export async function GET(ctx: APIContext) {
    const user = await ctx.locals.currentUser();
    if (!user) {
        return new Response(apiResponse(false, null, { type: "unauthorized", cause: "User not authenticated" }), { status: 401 });
    }
    
    try {
        const session = await prisma.mockSession.findUnique({
            where: { clerkID: user.id },
            include: { mock: { select: { totalTimeMins: true } } }
        });

        if (!session) {
            return new Response(apiResponse(false, null, { type: "not_found", cause: "No active session found." }), { status: 404 });
        }

        const answers = await prisma.answer.findMany({
            where: { clerkID: user.id, mockID: session.mockID },
            select: { questionID: true, optionID: true },
        });

        if (isSessionExpired(session)) {
            return new Response(apiResponse(false, { answers }, { type: "time", cause: "Your session has expired." }), { status: 410 }); 
        }

        return new Response(apiResponse(true, { session, answers }), { status: 200 });

    } catch (error) {
        console.error("GET Session Error:", error);
        return new Response(apiResponse(false, null, { type: "server_error", cause: "Could not retrieve session." }), { status: 500 });
    }
}

export async function POST(ctx: APIContext) {
    const user = await ctx.locals.currentUser();
    if (!user) {
        return new Response(apiResponse(false, null, { type: "unauthorized", cause: "User not authenticated" }), { status: 401 });
    }

    try {
        const data = await ctx.request.json();
        const parsed = CreateSessionSchema.parse(data);

        const [existingSession, mockExists] = await Promise.all([
            prisma.mockSession.findUnique({ where: { clerkID: user.id } }),
            prisma.mock.findUnique({ where: { id: parsed.mockID }, select: { id: true } })
        ]);

        if (existingSession) {
            return new Response(apiResponse(false, null, { type: "conflict", cause: "An active session already exists for this user. Please submit the answers to end session." }), { status: 409 });
        }

        if (!mockExists) {
            return new Response(apiResponse(false, null, { type: "not_found", cause: "The specified mock test does not exist." }), { status: 404 });
        }

        const newSession = await prisma.mockSession.create({
            data: {
                mockID: parsed.mockID,
                clerkID: user.id
            }
        });
      
        return new Response(apiResponse(true, newSession), { status: 200 });

    } catch (error) {
        if (error instanceof ZodError) {
            return new Response(apiResponse(false, null, { type: "validation", cause: error.issues }), { status: 400 });
        }
        console.error("POST Session Error:", error);
        return new Response(apiResponse(false, null, { type: "server_error", cause: "Could not create session." }), { status: 500 });
    }
}

export async function PUT(ctx: APIContext) {
    const user = await ctx.locals.currentUser();
    if (!user) {
        return new Response(apiResponse(false, null, { type: "unauthorized", cause: "User not authenticated" }), { status: 401 });
    }

    try {
        const data = await ctx.request.json();
        const parsed = SyncAnswersSchema.parse(data);

        const session = await prisma.mockSession.findUnique({
            where: { clerkID: user.id },
            include: { mock: { select: { totalTimeMins: true } } }
        });

        if (!session || session.mockID !== parsed.mockID) {
            return new Response(apiResponse(false, null, { type: "not_found", cause: "No active session for this mock." }), { status: 404 });
        }

        if (isSessionExpired(session)) {
            return new Response(apiResponse(false, null, { type: "time", cause: "Time is up. Syncing is no longer allowed. Please submit your test." }), { status: 410 });
        }

        const upsertPromises = parsed.answers.map(ans =>
            prisma.answer.upsert({
                where: { questionID_clerkID: { questionID: ans.questionID, clerkID: user.id } },
                create: { ...ans, clerkID: user.id, mockID: parsed.mockID },
                update: { optionID: ans.optionID },
            })
        );

        await prisma.$transaction(upsertPromises);

        return new Response(apiResponse(true, { synced: parsed.answers.length }), { status: 200 });

    } catch (error) {
        if (error instanceof ZodError) {
            return new Response(apiResponse(false, null, { type: "validation", cause: error.issues }), { status: 400 });
        }
        console.error("PUT Session Error:", error);
        return new Response(apiResponse(false, null, { type: "server_error", cause: "Could not sync answers." }), { status: 500 });
    }
}
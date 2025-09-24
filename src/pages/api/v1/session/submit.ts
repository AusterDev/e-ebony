import type { APIContext } from "astro";
import { getDevice, DeviceCache } from "../../../../lib/auth";
import prisma from "../../../../lib/prisma";
import { apiResponse } from "../../../../types/response";

function isSessionExpired(session: { createdAt: Date; mock: { totalTimeMins: number } }): boolean {
    const expiry = session.createdAt.getTime() + session.mock.totalTimeMins * 60 * 1000;
    return Date.now() > expiry;
}

export async function POST(ctx: APIContext) {
    const device = await getDevice(ctx);

    if (!device) {
        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Missing deviceID" }), { status: 403 });
    }

    try {
        const session = await prisma.mockSession.findUnique({
            where: { deviceID: device.id },
            include: {
                mock: {
                    include: {
                        questions: { include: { options: true, correctOption: true } }
                    }
                }
            }
        });

        if (!session) {
            return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "No active session" }), { status: 403 });
        }

        const answers = await prisma.answer.findMany({ where: { deviceID: device.id, mockID: session.mockID } });

        let totalMarks = 0;
        const questionResults = session.mock.questions.map(q => {
            const userAnswer = answers.find((a: { questionID: string; }) => a.questionID === q.id);
            const isCorrect = userAnswer?.optionID === q.correctOptionID;
            if (isCorrect) totalMarks += q.marks;
            return {
                id: q.id,
                number: q.number,
                content: q.content,
                marks: q.marks,
                negativeMarks: q.negativeMarks,
                correctOptionID: q.correctOptionID,
                userChoice: userAnswer?.optionID ?? null,
                isCorrect,
            };
        });

        const timeTaken = Math.floor((Date.now() - session.createdAt.getTime()) / 1000);
        const expired = isSessionExpired(session);

        if (expired) {
            DeviceCache.delete(device.id);
            await prisma.$transaction([
                prisma.answer.deleteMany({ where: { deviceID: device.id, mockID: session.mockID } }),
                prisma.mockSession.delete({ where: { id: session.id } }),
            ]);
        }

        return new Response(apiResponse(true, {
            mock: {
                id: session.mock.id,
                subject: session.mock.subject,
                instructions: session.mock.instructions,
                totalTimeMins: session.mock.totalTimeMins,
            },
            questions: questionResults,
            totalMarks,
            timeTaken,
            expired,
        }), { status: 200 });

    } catch (error) {
        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Invalid request" }), { status: 400 });
    }
}

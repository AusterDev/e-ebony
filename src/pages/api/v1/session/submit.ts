import type { APIContext } from "astro";
import prisma from "../../../../lib/prisma";
import { apiResponse } from "../../../../types/response";
import type { Option } from "../../../../generated/prisma";

export async function POST(ctx: APIContext) {
    const user = await ctx.locals.currentUser();

    if (!user) {
        return new Response(apiResponse(false, null, { type: "unauthorized", cause: "User not authenticated" }), { status: 401 });
    }

    try {
        const session = await prisma.mockSession.findUnique({
            where: { clerkID: user.id },
            include: {
                mock: {
                    include: {
                        questions: { include: { options: true } }
                    }
                }
            }
        });

        if (!session) {
            return new Response(apiResponse(false, null, { type: "not_found", cause: "No active session found for this user." }), { status: 404 });
        }
        
        const answers = await prisma.answer.findMany({ where: { clerkID: user.id, mockID: session.mockID } });
        const answerMap = new Map(answers.map((a: { questionID: any; optionID: any; }) => [a.questionID, a.optionID]));

        let totalMarks = 0;

        const questionResults = session.mock.questions.map((q: { id: unknown; options: any[]; correctOptionNumber: any; marks: number; negativeMarks: number; number: any; content: any; correctOptionID: any; }) => {
            const userOptionID = answerMap.get(q.id);
            let score = 0;
            let isCorrect = false;

            const userChosenOption = userOptionID
                ? q.options.find((opt: Option) => opt.id === userOptionID)
                : undefined;

            const correctOption = q.options.find((opt: Option) => opt.id === q.correctOptionID);

            if (userChosenOption) { 
                if (userChosenOption.id === q.correctOptionID) {
                    score = q.marks;
                    isCorrect = true;
                } else {
                    score = -q.negativeMarks;
                }
            }
            
            totalMarks += score;

            return {
                id: q.id,
                number: q.number,
                content: q.content, 
                
                userOptionID: userChosenOption?.id ?? null,
                userOption: userChosenOption?.content ?? null,
                correctOptionID: correctOption?.id ?? null,
                correctOption: correctOption?.content ?? null,

                isCorrect,
                score,
            };
        });

        const timeTakenSecs = Math.floor((Date.now() - session.createdAt.getTime()) / 1000);

        const result = await prisma.$transaction(async (tx: { mockResult: { create: (arg0: { data: { clerkID: string; mockID: any; totalMarks: number; timeTakenSecs: number; resultsJson: any; }; }) => any; }; answer: { deleteMany: (arg0: { where: { clerkID: string; mockID: any; }; }) => any; }; mockSession: { delete: (arg0: { where: { id: any; }; }) => any; }; }) => {
            const newResult = await tx.mockResult.create({
                data: {
                    clerkID: user.id,
                    mockID: session.mockID,
                    totalMarks,
                    timeTakenSecs,
                    resultsJson: questionResults as any,
                },
            });

            await tx.answer.deleteMany({ where: { clerkID: user.id, mockID: session.mockID } });
            await tx.mockSession.delete({ where: { id: session.id } });
            
            return newResult;
        });
        
        await prisma.mockSession.deleteMany({
            where: {
                clerkID: user.id,
            }
        });

        return new Response(apiResponse(true, { 
            resultId: result.id,
            totalMarks,
            timeTaken: timeTakenSecs,
        }), { status: 200 });

    } catch (error) {
        console.error("Evaluation Error:", error);
        return new Response(apiResponse(false, null, { type: "server_error", cause: "An error occurred during evaluation." }), { status: 500 });
    }
}
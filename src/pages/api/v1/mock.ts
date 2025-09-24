import type { APIContext } from "astro";
import prisma from "../../../lib/prisma";
import { apiResponse } from "../../../types/response";
import { CreateMockRequestSchema } from "../../../schemas/mock";
import type { Mock } from "../../../generated/prisma";
import { makeNum } from "../../../utils/num";

export async function GET(ctx: APIContext) {
    const params = new URLSearchParams(ctx.request.url);
    
    const id = params.get("id") || undefined;
    const subject = params.get("subject") || undefined;
    const totalTimeMins = params.get("totalTimeMins") || undefined;
    const sampleSize = params.get("sampleSize") || undefined;

    const results = await prisma.mock.findMany({
        where: {
            id: id,
            subject: subject,
            totalTimeMins: makeNum(totalTimeMins) || undefined,
        },
        take: makeNum(sampleSize) || undefined,
    });

    return new Response(apiResponse<Mock[]>(true, results));
}

export async function POST(ctx: APIContext) {
    const user = await ctx.locals.currentUser();
    if (!user) {
        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Unauthorized" }), { status: 403 });
    }

    try {
        const data = await ctx.request.json();
        const parsed = CreateMockRequestSchema.parse(data);

        const newMock = await prisma.mock.create({
            data: {
                subject: parsed.subject,
                instructions: parsed.instructions,
                totalTimeMins: parsed.totalTimeMins,
                clerkID: user.id,
            },
        });

        for (const question of parsed.questions) {
            const createdQ = await prisma.question.create({
                data: {
                    mockID: newMock.id,
                    number: question.number,
                    content: question.content,
                    marks: question.marks,
                    negatveMarks: question.negativeMarks,
                    correctOptionNumber: question.correctOptionNumber,
                },
            });

            const createdOptions = await Promise.all(
                question.options.map((opt) =>
                    prisma.option.create({
                        data: {
                            number: opt.number,
                            content: opt.content,
                            questionID: createdQ.id,
                        },
                    })
                )
            );

            const correctOpt = createdOptions.find((o) => o.number === question.correctOptionNumber);
            if (!correctOpt) {
                throw new Error(`No option with number ${question.correctOptionNumber} for question ${question.number}`);
            }

            await prisma.question.update({
                where: { id: createdQ.id },
                data: { correctOptionID: correctOpt.id },
            });
        }

        return new Response(apiResponse<Mock>(true, newMock), { status: 201 });
    } catch (error) {
        if (error instanceof Error && "issues" in (error as any)) {
            return new Response(apiResponse<any>(false, null, { type: "validation", cause: (error as any).issues }), { status: 400 });
        }

        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Invalid request" }), { status: 400 });
    }
}

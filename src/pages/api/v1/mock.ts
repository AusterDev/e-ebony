import type { APIContext } from "astro";
import prisma from "../../../lib/prisma";
import { apiResponse } from "../../../types/response";
import type { Mock } from "../../../generated/prisma";
import { makeNum } from "../../../utils/num";
import { CreateMockRequestSchema } from "../../../schemas/mock";

export async function GET(ctx: APIContext) {
    const url = new URL(ctx.request.url);
    const id = url.searchParams.get("id") || undefined;
    const subject = url.searchParams.get("subject") || undefined;
    const totalTimeMins = url.searchParams.get("totalTimeMins") || undefined;
    const sampleSize = url.searchParams.get("sampleSize") || undefined;
    const onlyMine = url.searchParams.get("onlyMine") || undefined;

    let user;

    if (onlyMine) {
        user = await ctx.locals.currentUser();

        if (!user) return new Response(apiResponse<any>(false, null, { type: "unauthorized", cause: "Not logged in" }), { status: 401 })
    }

    const results = await prisma.mock.findMany({
        where: {
            ...(id ? { id } : {}),
            ...(subject
                ? {
                      subject: {
                          contains: subject,
                      },
                  }
                : {}),
            ...(totalTimeMins
                ? { totalTimeMins: makeNum(totalTimeMins) || undefined }
                : {}),
            ...(onlyMine ? { clerkID: user?.id} : {}),
        },
        take: makeNum(sampleSize) || undefined,
        orderBy: { createdAt: "desc" },
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
                totalTimeMins: parsed.totalTime,
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
                    negativeMarks: question.negativeMarks,
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
        console.error(error)
        if (error instanceof Error && "issues" in (error as any)) {
            return new Response(apiResponse<any>(false, null, { type: "validation", cause: (error as any).issues }), { status: 400 });
        }

        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: "Internal server error" }), { status: 500 });
    }
}
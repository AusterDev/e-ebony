import type { APIContext } from "astro";
import prisma from "../../../lib/prisma";
import { apiResponse } from "../../../types/response";
import type { Mock } from "../../../generated/prisma";
import { makeNum } from "../../../utils/num";

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

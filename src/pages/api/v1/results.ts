import type { APIContext } from "astro";
import prisma from "../../../lib/prisma";
import { apiResponse } from "../../../types/response";
import type { Mock } from "../../../generated/prisma";
import { makeNum } from "../../../utils/num";

export async function GET(ctx: APIContext) {
    const url = new URL(ctx.request.url);
    const id = url.searchParams.get("id") || undefined;
    const sampleSize = url.searchParams.get("sampleSize") || undefined;

    const user = await ctx.locals.currentUser();

    if (!user) return new Response(apiResponse<any>(false, null, { type: "unauthorized", cause: "Not logged in" }), { status: 401 })

    const results = await prisma.mockResult.findMany({
        where: {
            ...(id ? { id } : {}),
            clerkID: user.id,
        },
        take: makeNum(sampleSize) || undefined,
        orderBy: { createdAt: "desc" },
    });

    return new Response(apiResponse<Mock[]>(true, results));
}

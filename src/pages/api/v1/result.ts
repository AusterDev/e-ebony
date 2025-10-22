import type { APIContext } from "astro";
import prisma from "../../../lib/prisma";
import { apiResponse } from "../../../types/response";

export async function GET(ctx: APIContext) {
    const user = await ctx.locals.currentUser();

    if (!user) {
        return new Response(apiResponse(false, null, { type: "unauthorized", cause: "User not authenticated" }), { status: 401 });
    }

    const url = new URL(ctx.request.url);
    const id = url.searchParams.get("id");

    if (!id) {
        return new Response(apiResponse(false, null, { type: "validation", cause: "Result ID is missing." }), { status: 400 });
    }

    try {
        const mockResult = await prisma.mockResult.findUnique({
            where: {
                id: id,
                clerkID: user.id
            },
        });

        if (!mockResult) {
            return new Response(apiResponse(false, null, { type: "not_found", cause: "Mock result not found." }), { status: 404 });
        }

        return new Response(apiResponse(true, mockResult), { status: 200 });

    } catch (error) {
        console.error("Get Result Error:", error);

        return new Response(apiResponse(false, null, { type: "server_error", cause: "An error occurred while fetching the result." }), { status: 500 });
    }
}
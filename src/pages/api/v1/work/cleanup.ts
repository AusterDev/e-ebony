import type { APIContext } from "astro";
import prisma from "../../../../lib/prisma";
import { apiResponse } from "../../../../types/response";

if (!import.meta.env.INTERNAL_API_TOKEN) {
  console.error("[Astro Cleanup] ERROR: INTERNAL_API_TOKEN is not set");
  throw new Error("INTERNAL_API_TOKEN is required");
}

async function cleanupTask() {
    const sessions = await prisma.mockSession.findMany(
        {
            include: {
                mock: true,
            }
        }
    );

    const now = new Date();

    const expiredSessions = sessions.filter((session: { mock: { totalTimeMins: number }; createdAt: { getTime: () => number } }) => {
        const expiryTime = new Date(session.createdAt.getTime() + session.mock.totalTimeMins * 60_000);
        return (45 * 1000 * 60) <= (now.getTime() - expiryTime.getTime()); // grace period of 45 minutes
    });

    for (const session of expiredSessions) {
        await prisma.mockSession.delete({
            where: { id: session.id },
        });
    }
}

export async function POST(context: APIContext) {
    try {   
        const authHeader = context.request.headers.get("authorization");
        if (authHeader !== `Bearer ${import.meta.env.INTERNAL_API_TOKEN}`) {
            return new Response("Unauthorized", { status: 401 });
        }

        await cleanupTask();
        return new Response(apiResponse<any>(true, null), { status: 201 });
    } catch (error) {
        console.error("[/api/v1/work/cleanup: Error] ", error);
        return new Response(apiResponse<any>(false, null, { type: "signatureless", cause: error }), { status: 500 });
    }
}
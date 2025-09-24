import type { APIContext } from "astro";
import prisma from "../../../lib/prisma";
import { apiResponse } from "../../../types/response";
import type { Device } from "../../../generated/prisma";
import { generateDeviceID, getDevice } from "../../../lib/auth";

export async function POST(ctx: APIContext) {
    const user = await ctx.locals.currentUser()
    const receivedDevice = await getDevice(ctx);

    if (receivedDevice) {
        return new Response(
            apiResponse<Device>(true, receivedDevice)
        )
    }

    if (user) {
        const device = await prisma.device.findUnique({
            where: {
                clerkID: user.id,
            },
        });

        if (device) {
            return new Response(
                apiResponse<Device>(true, device),
            );
        }
    }

    const newDevice = await prisma.device.create({
        data: {
            id: generateDeviceID(),
            label: ctx.request.headers.get("User-Agent") || "unlabelled",
            clerkID: user?.id,
        },
    });

    return new Response(
        apiResponse<Device>(true, newDevice),
    );
}
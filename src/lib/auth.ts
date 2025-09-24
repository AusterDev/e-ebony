import type { APIContext } from "astro";
import crypto from "crypto";
import type { Device } from "../generated/prisma";
import prisma from "./prisma";

export const DeviceCache: Map<string, Device> = new Map();

export async function getDevice(ctx: APIContext, clerkID?: string) {
    const deviceID = ctx.request.headers.get("X-Client-Device");

    if (!deviceID) return null;

    const device = await prisma.device.findUnique({
        where: {
            id: deviceID,
            clerkID: clerkID,
        }
    });
    return device;
}

export async function getDeviceOfUser(ctx: APIContext) {
    const user = await ctx.locals.currentUser()
    if (!user) return null;

    const device = await getDevice(ctx, user.id);
    return user
}

// Generate opaque deviceID
export function generateDeviceID() {
    return crypto.randomBytes(20).toString('hex');
}
import { z } from "astro/zod";

export const CreateSessionSchema = z.object({
    mockID: z.string().uuid(),
})
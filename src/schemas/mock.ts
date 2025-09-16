import z from "astro/zod";

const optionsSchema = z.object({
    number: z.number(),
    content: z.string(),
    questionID: z.string().uuid(),
});

const questionSchema = z.object({
    number: z.number(),
    content: z.string(),
    marks: z.number(),
    options: z.array(optionsSchema),
}).refine((arg) => {
    const existingNumbers: Map<number, boolean> = new Map();

    arg.options.forEach(opt => {
        if (existingNumbers.has(opt.number)) {
            return "Duplicate option number"
        }
        existingNumbers.set(opt.number, true);
    });
});

export const CreateMockRequestSchema = z.object({
    subject: z.string().min(1).max(45),
    instructions: z.string().max(20_000),
    totalTimeMins: z.number().min(1),
    questions: z.array(questionSchema)
}).refine((arg) => {
    const existingNumbers: Map<number, boolean> = new Map();

    arg.questions.forEach(q => {
        if (existingNumbers.has(q.number)) {
            return "Duplicate question number"
        }
        existingNumbers.set(q.number, true);
    });
});
import z from "astro/zod";
import sanitizeHtml from "sanitize-html";

const clean = (value: string) => sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {},
}).trim();

const optionsSchema = z.object({
    number: z.number(),
    content: z.string(),
    questionNumber: z.number(),
});

export const questionSchema = z.object({
    number: z.number(),
    content: z.string()
        .transform(value => clean(value)),
    marks: z.number().min(1),
    negativeMarks: z.number().max(0),
    correctOptionNumber: z.number(),
    options: z.array(optionsSchema).superRefine((options, ctx) => {
        const seen = new Set<number>();
        options.forEach((opt, idx) => {
            if (seen.has(opt.number)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: `Duplicate option number: ${opt.number}`,
                    path: [idx, "number"],
                });
            }
            seen.add(opt.number);
        });
    }),
});

const essentials = {
    subject: z.string()
        .regex(/^[a-zA-Z0-9_-]+$/, {
            message: "Can only contain letters, numbers, underscores (_), and hyphens (-). No spaces allowed."
        })
        .max(45),
    instructions: z.string().max(20_000)
        .transform(value => clean(value)),
    totalTime: z.number().min(1),
}

export const CreateMockMetaUISchema = z.object({
    ...essentials,
});

export const CreateMockRequestSchema = z.object({
    ...essentials,
    questions: z.array(questionSchema).superRefine((questions, ctx) => {
        const seen = new Set<number>();
        questions.forEach((q, idx) => {
            if (seen.has(q.number)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: `Duplicate question number: ${q.number}`,
                    path: [idx, "number"],
                });
            }
            seen.add(q.number);
        });
    }),
});

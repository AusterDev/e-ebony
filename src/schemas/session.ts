import { z } from "astro/zod";

const answersSchema = z.object({
    optionID: z.string().uuid(),
    questionID: z.string().uuid(),
});

export const CreateSessionSchema = z.object({
    mockID: z.string().uuid(),
});

export const SyncAnswersSchema = z.object({
    mockID: z.string().uuid(),
    answers: z.array(answersSchema),
}).refine(
    (arg) => {
      const seenQuestions = new Set<string>();
      const seenOptions = new Set<string>();

      for (const ans of arg.answers) {
        if (seenQuestions.has(ans.questionID) || seenOptions.has(ans.optionID)) {
          return false;
        }
        seenQuestions.add(ans.questionID);
        seenOptions.add(ans.optionID);
      }
      return true;
    },
    {
      message: "Duplicate answers are not allowed",
      path: ["answers"],
    }
  );
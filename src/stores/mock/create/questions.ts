import { computed, map } from "nanostores";
import type { questionSchema } from "../../../schemas/mock";
import type { z } from "astro/zod";

type Question = z.infer<typeof questionSchema>;

export const questionsToCreate = map<Record<number, Question>>();

export const totalQuestionsToCreate = computed(questionsToCreate, (store) => Object.keys(store).length)
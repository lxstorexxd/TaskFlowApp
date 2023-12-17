import { z } from "zod";

export const CreateCard = z.object({
  title: z.string({
    required_error: "Требуется название",
    invalid_type_error: "Требуется название",
  }).min(3, {
    message: "Название слишком короткое.",
  }),
  boardId: z.string(),
  listId: z.string(),
});

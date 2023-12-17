import { z } from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: "Требуется название",
    invalid_type_error: "Требуется название",
  }).min(3, {
    message: "Название слишком короткое."
  }),
  image: z.string({
    required_error: "Требуется изображение",
    invalid_type_error: "Требуется изображение",
  }),
});

import fileUpload, { FileArray } from "express-fileupload";
import { z } from "zod";

export const CreateVideoSchema = z.object({
  body: z.object({
    title: z.string().nonempty(),
    description: z.string().optional(),
    video: z.any(),
  }),
});

export type CreateVideoType = z.infer<typeof CreateVideoSchema>["body"];

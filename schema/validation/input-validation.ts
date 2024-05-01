import { z, type ZodType } from "zod";

const inputSchema: z.infer<ZodType> = z
  .object({
    email: z.string().email(),
    age: z.number({ message: "" }).min(1, { message: "" }).max(3, { message: "" }),
    phoneNumber: z.number().min(1).max(3, { message: "" }),
    website: z
      .string({ message: "" })
      .url({ message: "" })
      .min(15, { message: "" })
      .max(35, { message: "" })
      .includes(".com", { message: "" }),
    password: z.string({ message: "" }).min(6, { message: "" }).max(15, { message: "" }),
    confirmPassword: z.string({ message: "" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "",
    path: ["confirmPassword"],
  });

export { inputSchema };

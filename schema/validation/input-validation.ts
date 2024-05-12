import { z, type ZodType } from "zod";

const inputSchema: z.infer<ZodType> = z
  .object({
    email: z.string({ message: "email required" }).email({ message: "email invalid" }),
    age: z
      .number({ message: "should number type value" })
      .min(1, { message: "have 1 min value age " })
      .max(3, { message: "have max 3 value age" }),
    phoneNumber: z
      .number({ message: "phone number is required" })
      .min(8, { message: "have min 8 value of phone number" })
      .max(11, { message: "have max 11 value of phone number" }),
    website: z
      .string({ message: "value of website is required" })
      .url({ message: "this value is invalid" })
      .min(15, { message: "have 15 min value of url website" })
      .max(35, { message: "have 35 max value of url website" })
      .includes(".com", { message: "have include .com value " }),
    password: z
      .string({ message: "password is required" })
      .min(6, { message: "password 6 min of value" })
      .max(15, { message: "password 15 max of value" })
      .regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/), { message: "regex is required" })
      .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), "Name should contain only alphabets"),
    confirmPassword: z.string({ message: "confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "confirm password not equal to password",
    path: ["confirmPassword"],
  });

export { inputSchema };

import { z } from "zod"

export const RegisterFormSchema = z.object({
  passWord: z.string().min(1, { message: "Enter the Password" }),
  userName: z.string().min(1, { message: "Enter the UserName/Email" }),
  Email: z.string().email(),
  confirmPassword: z.string().min(1, { message: "your confirmation is not added" }),
})

export type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>

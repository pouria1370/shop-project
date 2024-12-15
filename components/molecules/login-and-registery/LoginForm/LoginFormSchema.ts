import { z } from "zod"

export const LoginFormSchema = z.object({
  passWord: z.string().min(1, { message: "Enter the Password" }),
  userNameOrEmail: z.string().min(1, { message: "Enter the UserName/Email" }),
  otp: z.string().optional(),
})

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>

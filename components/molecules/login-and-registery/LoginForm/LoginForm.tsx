"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "components/atoms/Button/Button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/atoms/Form/Form"
import { Input } from "components/atoms/Input/Input"
import { LoginFormSchema, LoginFormSchemaType } from "./LoginFormSchema"
const LoginForm = () => {
  const form = useForm<LoginFormSchemaType>({
    resolver: zodResolver(LoginFormSchema),
  })

  const onSubmit: SubmitHandler<LoginFormSchemaType> = () => {}
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex size-full flex-col justify-center space-y-8 ">
        <FormField
          name="userNameOrEmail"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Username/Email</FormLabel>
              <FormControl>
                <Input placeholder="username / email" {...field} error={fieldState.error} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="passWord"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Username/Email</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} error={fieldState.error} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit" className="bg-slate-900 text-slate-100">
          Continue
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm

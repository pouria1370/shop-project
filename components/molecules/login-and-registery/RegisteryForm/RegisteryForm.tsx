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
import { RegisterFormSchema, RegisterFormSchemaType } from "./RegisteryFormSchema"
const RegisterForm = () => {
  const form = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const onSubmit: SubmitHandler<RegisterFormSchemaType> = () => {
    console.log("first")
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          name="userName"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} error={fieldState.error} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="Email"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} error={fieldState.error} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} error={fieldState.error} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Confirmation Password</FormLabel>
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

export default RegisterForm

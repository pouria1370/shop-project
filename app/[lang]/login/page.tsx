"use client"
import React from "react"
import { Button } from "components/atoms/Button/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "components/atoms/Card/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/atoms/Tab/Tab"
import LoginContainer from "components/molecules/login-and-registery/LoginContainer/LoginContainer"
import LoginForm from "components/molecules/login-and-registery/LoginForm/LoginForm"
import RegisteryForm from "components/molecules/login-and-registery/RegisteryForm/RegisteryForm"

const LoginAndRegisterPage = () => {
  return (
    <Tabs defaultValue="login" className="my-10 h-full">
      <TabsList className="grid size-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="registration">Registration</TabsTrigger>
      </TabsList>
      <TabsContent value="login" className="size-full ">
        <Card className="size-full">
          <CardHeader>
            <CardTitle>Registration</CardTitle>
            <CardDescription>Make changes to your account here. Click save when you are done.</CardDescription>
          </CardHeader>
          <CardContent className="size-full space-y-2">
            <LoginContainer title="login">
              <LoginForm />
            </LoginContainer>
          </CardContent>
          {
            // TODO Here we can add more items for footer
          }
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="registration" className="size-full ">
        <Card className="size-full">
          <CardHeader>
            <CardTitle>Registration</CardTitle>
            <CardDescription>Change your password here. After saving you will be logged out.</CardDescription>
          </CardHeader>
          <CardContent className="size-full space-y-2">
            <LoginContainer title="login">
              <RegisteryForm />
            </LoginContainer>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default LoginAndRegisterPage

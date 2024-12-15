import React, { ReactNode } from "react"

interface IProps {
  title: string
  children: ReactNode
}
const LoginContainer = ({ children, title }: IProps) => {
  return (
    <div className="flex size-full min-h-[500px] flex-col sm:flex-row ">
      <div className="bg-secondary-900 w-full p-10 text-3xl text-slate-100 sm:w-1/3">{title}</div>
      <div className="flex w-2/3 flex-col px-6">{children}</div>
    </div>
  )
}

export default LoginContainer

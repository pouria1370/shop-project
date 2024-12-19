import { Protect } from "@clerk/nextjs"
import React from "react"

const SettingPage = () => {
  return (
    <div>
      <Protect />
    </div>
  )
}

export default SettingPage

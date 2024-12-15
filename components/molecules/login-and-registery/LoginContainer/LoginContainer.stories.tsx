import type { Meta, StoryObj } from "@storybook/react"
import LoginContainer from "./LoginContainer"

const meta: Meta<typeof LoginContainer> = {
  title: "Button",
  component: LoginContainer,
  args: {
    children: "Button",
    title: "Login",
  },
  argTypes: {
    title: {
      control: "select",
      options: ["Login", "Register"],
    },
  },
}

type Story = StoryObj<typeof LoginContainer>

export const Default: Story = {
  render: (args) => <LoginContainer {...args} />,
}

export default meta

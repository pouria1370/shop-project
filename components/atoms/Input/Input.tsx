import { cn } from "utils/Cn"
import * as React from "react"
import { FieldError } from "react-hook-form"

type InputProps = React.ComponentProps<"input"> & {
  error?: FieldError | undefined
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, error, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        error ? "border-red-500" : "",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = "Input"

export { Input }

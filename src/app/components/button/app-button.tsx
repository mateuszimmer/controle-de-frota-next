import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {
  success?: boolean,
  cancel?: boolean,
  alert?: boolean,
  children: React.ReactNode
}

export default function AppButton ({children, className, ...props}: ButtonProps) {
  return (
    <button {...props} className={className}>{children}</button>
  )
}
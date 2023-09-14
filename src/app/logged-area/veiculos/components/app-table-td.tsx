import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TdProps extends ComponentProps<'td'> {
  children: React.ReactNode
}

export default function AppTd ( { children, className, ...props }: TdProps ) {
  return (
    <td className={twMerge('py-3 border-b', className)} {...props}>{children}</td>
  )
}
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ThProps extends ComponentProps<'th'> {
  children: React.ReactNode,
}

export default function AppTh ( { children, className, ...props }: ThProps ) {
  return (
    <th className={twMerge('py-3 border-b border-slate-200 bg-gray-200', className)} {...props} >
      {children}
    </th>
  )
}
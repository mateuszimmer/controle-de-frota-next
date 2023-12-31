import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Sistema de Gestão de Frota',
  icons: '/images/logo.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  )
}

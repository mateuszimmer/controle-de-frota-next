import AppLayout from '@/components/app-layout/app-layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppLayout children={children} />
  )
}

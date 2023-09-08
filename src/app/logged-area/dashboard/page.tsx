import { Metadata } from 'next'
import AppLayoutHeader from '@/components/app-layout-header/app-layout-header'
import AppLayoutMain from '@/components/app-layout-main/app-layout-main'

export const metadata: Metadata = {
  title: 'Gestão de Frota - Home',
  description: 'Sistema de Gestão de Frota',
}

export default function Dashboard() {
  return (
    <>
        <AppLayoutHeader titulo="Dashboard Novo" />
        <AppLayoutMain>
            Olá, Mundo. Esse é um novo formato para o App Layout.
        </AppLayoutMain>
    </>
  )
}

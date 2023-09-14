import { Metadata } from 'next'
import AppLayoutHeader from '@/app/components/app-layout/app-layout-header'
import AppLayoutMain from '@/app/components/app-layout/app-layout-main'

export const metadata: Metadata = {
  title: 'Gestão de Frota - Home',
  description: 'Sistema de Gestão de Frota',
}

export default function Dashboard() {
  return (
    <>
        <AppLayoutHeader titulo="Gerenciador" />
        <AppLayoutMain>
            Olá, Mundo. Esse é um novo formato para o App Layout.
        </AppLayoutMain>
    </>
  )
}

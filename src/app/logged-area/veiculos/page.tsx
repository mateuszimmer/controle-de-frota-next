'use client'

import { Metadata } from 'next'
import AppLayoutMain from '@/app/components/app-layout/app-layout-main'
import VehiclesTab from './components/table'
import { veiculos } from '@/utils/data/veículos'
import VehiclesLayoutHeader from './components/vehicles-header'

export const metadata: Metadata = {
  title: 'Gestão de Frota - Home',
  description: 'Sistema de Gestão de Frota',
}

export default function Dashboard() {
  return (
    <>
      <VehiclesLayoutHeader titulo="Veículos"/>
      <AppLayoutMain>
        <VehiclesTab VeiculosProps={veiculos} />
      </AppLayoutMain>
    </>
  )
}

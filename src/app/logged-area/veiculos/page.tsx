import { Metadata } from 'next'
import AppLayoutMain from '@/app/components/app-layout/app-layout-main'
import VehiclesTab from './components/table'
import { veiculos } from '@/utils/data/veículos'
import VehiclesLayoutHeader from './components/vehicles-header'
import NewVehivleModal from './components/new-vehicle-modal'
import EditVehicleModal from './components/edit-vehicle-modal/edit-vehicle-modal'

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
        <NewVehivleModal />
        <EditVehicleModal />
      </AppLayoutMain>
    </>
  )
}

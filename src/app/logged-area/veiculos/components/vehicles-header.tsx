import AppButton from '@/app/components/button/app-button'
import React from 'react'

export default function VehiclesLayoutHeader({titulo,}: {titulo: string}) {
    return (
        <header className="bg-white shadow flex justify-between px-5 content-center">
          <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{titulo}</h1>
          </div>
          <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex content-center">
            <AppButton className={'bg-sky-700 text-white rounded p-1 flex space-x-1 p-2 hover:bg-sky-900'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <p>Adicionar</p>
            </AppButton>
          </div>
        </header>
    )
}
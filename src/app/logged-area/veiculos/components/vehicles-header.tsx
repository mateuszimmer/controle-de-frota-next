"use client"
import React from 'react';
import AppButton from '@/app/components/button/app-button';
import { vehicleModalStateReducers } from "@/app/redux/features/new-vehicle-modal-slice";
import { useAppDispatch } from '@/app/redux/hooks';

export default function VehiclesLayoutHeader({titulo,}: {titulo: string,}) {
  const dispatch = useAppDispatch();
    return (
        <header className="bg-white shadow flex justify-between px-5 content-center">
          <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{titulo}</h1>
          </div>
          <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex content-center">
            <AppButton className={'bg-sky-700 text-white rounded-lg shadow p-1 flex space-x-1 p-2 hover:bg-sky-900'} onClick={() => dispatch(vehicleModalStateReducers.toggle())}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <p className='hidden md:flex'>Adicionar</p>
            </AppButton>
          </div>
        </header>
    )
}
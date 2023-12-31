"use client"

import React from 'react';
import { VeiculosProps } from '@/utils/data/veículos';
import Td from './app-table-td';
import Th from './app-table-th';
import AppButton from '@/app/components/button/app-button';
import { useAppDispatch } from '@/app/redux/hooks';
import { editVehicleModalStateReducers } from '@/app/redux/features/edit-vehicle-modal-slice';

export default function VehiclesTab ({VeiculosProps}: {VeiculosProps: VeiculosProps[]}): React.ReactElement {
  const dispatch = useAppDispatch();

  return (
    <div className="overflow-x-auto">
      <table className='bg-white shadow-lg w-full text-center rounded-2xl border border-black overflow-hidden'>
        <thead className='rounded-2x1'>
          <tr className='border border-red-500 rounded-2x1'>
            <Th className='rounded-2x1'>PLACA</Th>
            <Th>MARCA</Th>
            <Th>MODELO</Th>
            <Th>ANO</Th>
            <Th>COMBUSTÍVEL</Th>
            <Th>OPÇÕES</Th>
          </tr>
        </thead>
        <tbody>
          {VeiculosProps.map((veiculo) => (
            <tr>
              <Td className="hidden">{veiculo.id}</Td>
              <Td>{veiculo.placa}</Td>
              <Td>{veiculo.marca}</Td>
              <Td>{veiculo.modelo}</Td>
              <Td>{veiculo.anoModelo}</Td>
              <Td>{veiculo.combustivel}</Td>
              <Td className="space-x-2">
                <AppButton className={'text-sky-900 rounded-full p-1 bg-gray-200 shadow hover:bg-sky-900 hover:text-gray-200'} 
                  onClick={() => {
                    dispatch(editVehicleModalStateReducers.toggle(veiculo.id))
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </AppButton>
                <AppButton className={'text-red-600 rounded-full p-1 bg-gray-200 shadow hover:bg-red-600 hover:text-gray-200'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </AppButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
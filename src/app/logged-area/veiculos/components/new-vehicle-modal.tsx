"use client"

import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { vehicleModalStateReducers } from "@/app/redux/features/new-vehicle-modal-slice";
import AppButton from "@/app/components/button/app-button";

export default function NewVehivleModal(): JSX.Element {
  const modalState = useAppSelector(state => state.newVehicleModalSlice.value)
  const dispatch = useAppDispatch()
  return (
    <Transition.Root show={modalState} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => dispatch(vehicleModalStateReducers.toggle())}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-11/12 md:max-w-5xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start w-full">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <Dialog.Title as="h3" className="w-full text-base font-semibold leading-6 text-gray-900">
                        Cadastrar Novo Veículo
                      </Dialog.Title>
                        <form className="flex gap-5 flex-wrap mt-2 w-full">
                          <div className="grow min-w-[105px] max-w-[170px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputPlaca">
                              Placa
                            </label>
                            <input id="inputPlaca" type="text" placeholder="AAA1111 ou AAA1A11" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          <div className="grow min-w-[150px] max-w-[200px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputRenavan">
                              Renavan
                            </label>
                            <input id="inputRenavan" type="text" placeholder="Renavan" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div> 
                          <div className="grow min-w-[200px] max-w-[300px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputNumeroMotor">
                              Numeração Motor
                            </label>
                            <input id="inputNumeroMotor" type="text" placeholder="Numeração Motor" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div> 
                          <div className="grow min-w-[200px] max-w-[300px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputNumeroChassi">
                              Chassi
                            </label>
                            <input id="inputNumeroChassi" type="text" placeholder="Chassi" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          <div className="grow min-w-[200px] max-w-[300px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputMarca">
                              Marca
                            </label>
                            <input id="inputMarca" type="text" placeholder="Marca" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>    
                          <div className="grow min-w-[200px] max-w-[300px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputModelo">
                              Modelo
                            </label>
                            <input id="inputModelo" type="text" placeholder="Modelo" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          <div className="grow min-w-[100px] max-w-[150px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputAnoFabricacao">
                              Ano Fabricação
                            </label>
                            <input id="inputAnoFabricacao" type="text" placeholder="Ano Fabricação" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div> 
                          <div className="grow min-w-[100px] max-w-[150px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputAnoModelo">
                              Ano Modelo
                            </label>
                            <input id="inputAnoModelo" type="text" placeholder="Ano Modelo" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          <div className="grow min-w-[150px] max-w-[200px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputCor">
                              Cor
                            </label>
                            <input id="inputCor" type="text" placeholder="Cor" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          <div className="min-w-[150px] max-w-[230px] grow">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputTipoCombistivel">
                              Combustível
                            </label>
                            <input id="inputTipoCombistivel" type="text" placeholder="Combustível" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          <div className="grow min-w-[100px] max-w-[150px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputCapacidadeTanque">
                              Capacidade Tanque
                            </label>
                            <input id="inputCapacidadeTanque" type="text" placeholder="Litros" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          <div className="grow min-w-[100px] max-w-[150px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputPotenciaCV">
                              {"Potencia"}
                            </label>
                            <input id="inputPotenciaCV" type="text" placeholder="Cavalos" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          <div className="grow min-w-[100px] max-w-[150px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputCilindradas">
                              Cilindradas
                            </label>
                            <input id="inputCilindradas" type="text" placeholder="cm²" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>

                          <hr className="w-full"/>

                          <div className="grow min-w-[100px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputTipoVeiculo">
                              Tipo Veículo
                            </label>
                            <input id="inputTipoVeiculo" type="text" placeholder="Tipo Veículo" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                        </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <AppButton
                    className="inline-flex w-full justify-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600  sm:ml-3 sm:w-auto"
                    onClick={() => dispatch(vehicleModalStateReducers.toggle())}
                  >
                    Cadastrar
                  </AppButton>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => dispatch(vehicleModalStateReducers.toggle())}
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
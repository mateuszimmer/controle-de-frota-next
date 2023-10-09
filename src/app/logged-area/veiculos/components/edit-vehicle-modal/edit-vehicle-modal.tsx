"use client"

import AppButton from "@/app/components/button/app-button"
import { editVehicleModalStateReducers } from "@/app/redux/features/edit-vehicle-modal-slice"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

export default function EditVehicleModal(): JSX.Element {
  const modalState = useAppSelector(state => state.editVehicleModalSlice)
  const dispatch = useAppDispatch()
  return (
    <Transition.Root show={modalState.value} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => dispatch(editVehicleModalStateReducers.toggle(""))}>
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
                        {modalState.informacoes.marca} {modalState.informacoes.modelo} - {modalState.informacoes.placa}
                      </Dialog.Title>
                        <form className="flex gap-5 flex-wrap mt-2 w-full">

                        <input id="inputID" type="hidden" readOnly value={modalState.informacoes.id} />

                          <div className="grow min-w-[105px] max-w-[170px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputPlaca">
                              Placa
                            </label>
                            <input id="inputPlaca" type="text" readOnly value={modalState.informacoes.placa} className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          
                          <div className="grow min-w-[150px] max-w-[200px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputRenavan">
                              Renavan
                            </label>
                            <input id="inputRenavan" type="text" readOnly value={modalState.informacoes.renavan} className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div> 
                          
                          <div className="grow min-w-[200px] max-w-[300px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputNumeroMotor">
                              Numeração Motor
                            </label>
                            <input id="inputNumeroMotor" type="text" readOnly value={modalState.informacoes.numeroMotor} className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div> 
                          
                          <div className="grow min-w-[200px] max-w-[300px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputNumeroChassi">
                              Chassi
                            </label>
                            <input id="inputNumeroChassi" type="text" readOnly value={modalState.informacoes.chassi} className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          
                          <div className="grow min-w-[200px] max-w-[300px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputMarca">
                              Marca
                            </label>
                            <input id="inputMarca" type="text" readOnly value={modalState.informacoes.marca} className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>    
                          
                          <div className="grow min-w-[200px] max-w-[300px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputModelo">
                              Modelo
                            </label>
                            <input id="inputModelo" type="text" readOnly value={modalState.informacoes.modelo} className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          
                          <div className="grow min-w-[100px] max-w-[150px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputAnoFabricacao">
                              Ano Fabricação
                            </label>
                            <input id="inputAnoFabricacao" type="text" readOnly value={modalState.informacoes.anoFabricacao} className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div> 
                          
                          <div className="grow min-w-[100px] max-w-[150px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputAnoModelo">
                              Ano Modelo
                            </label>
                            <input id="inputAnoModelo" type="text" readOnly value={modalState.informacoes.anoModelo} className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
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
                            <input id="inputPotenciaCV" type="text" placeholder="CV" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
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

                          <div className="grow min-w-[100px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputTipoFrota">
                              Tipo Frota
                            </label>
                            <input id="inputTipoFrota" type="text" placeholder="Tipo Frota" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>

                          <div className="grow min-w-[100px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputCentroCusto">
                              Centro de Custo
                            </label>
                            <input id="inputCentroCusto" type="text" placeholder="Centro de Custo" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>
                          
                          <div className="grow min-w-[100px] max-w-[250px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputPatrimonio">
                              Patrimônio
                            </label>
                            <input id="inputPatrimonio" type="text" placeholder="Patrimônio" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>

                          <div className="grow min-w-[100px] max-w-[250px]">
                            <label className="text-sm text-gray-500 w-full pl-1" htmlFor="inputCodigoFipe">
                              Código FIPE
                            </label>
                            <input id="inputCodigoFipe" type="text" placeholder="Código FIPE" className="block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"/>
                          </div>

                        </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <AppButton
                    className="inline-flex w-full justify-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600  sm:ml-3 sm:w-auto"
                    onClick={() => dispatch(editVehicleModalStateReducers.toggle(""))}
                  >
                    Cadastrar
                  </AppButton>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => dispatch(editVehicleModalStateReducers.toggle(""))}
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
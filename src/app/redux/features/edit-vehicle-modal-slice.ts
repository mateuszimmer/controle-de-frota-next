import { createSlice } from "@reduxjs/toolkit";
import { veiculos, VeiculosProps } from "@/utils/data/veículos";

type modalStatus = {
  value: boolean;
  id: string,
  informacoes: VeiculosProps;
}

const initialState: modalStatus = {
  value: false,
  id: "",
  informacoes: {} as VeiculosProps
}

const editVehicleModalStateSlice = createSlice({
  name: "sliceEditModal",
  initialState,
  reducers: {
    toggle(state, payload) {
      state.value = !state.value
      state.id = payload.payload
      state.informacoes = veiculos.find((veiculo) => veiculo.id === state.id) || {} as VeiculosProps
      console.log(state.informacoes)
    }
  }
})

export const editVehicleModalStateReducers = editVehicleModalStateSlice.actions;

export default editVehicleModalStateSlice.reducer;
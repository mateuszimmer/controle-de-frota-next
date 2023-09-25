import { createSlice } from '@reduxjs/toolkit';

type modalStatus = {
  value: boolean;
};

const initialState: modalStatus = {
  value: false,
}

export const newVehicleModalStateSlice = createSlice({
  name: 'vehicleModalState',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
      console.log(state.value)
    }
  }
})

export const vehicleModalStateReducers = newVehicleModalStateSlice.actions;

export default newVehicleModalStateSlice.reducer
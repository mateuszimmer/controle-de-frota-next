import { configureStore } from "@reduxjs/toolkit";
import newVehicleModalSlice from "./features/new-vehicle-modal-slice";
import editVehicleModalSlice from "./features/edit-vehicle-modal-slice";

export const store = configureStore({
  reducer: {
    newVehicleModalSlice,
    editVehicleModalSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { FormState } from "./formSlice";

interface CarState extends FormState {
  id: string;
}

interface CarsState {
  data: CarState[];
  searchTerm: string;
}

const initialCarsState: CarsState = {
  data: [],
  searchTerm: "",
};

const carsSlice = createSlice({
  name: "cars",
  initialState: initialCarsState,
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },

    addCar: (state, action: PayloadAction<FormState>) => {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCar: (state, action: PayloadAction<string>) => {
      const updatedCars = state.data.filter((car) => car.id !== action.payload);

      state.data = updatedCars;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

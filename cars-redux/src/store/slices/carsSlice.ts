import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { FormState } from "./formSlice";

interface CarState extends FormState {
  id: string;
}

interface CarsState {
  cars: CarState[];
  searchTerm: string;
}

const initialCarsState: CarsState = {
  cars: [],
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
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCar: (state, action: PayloadAction<string>) => {
      const updatedCars = state.cars.filter((car) => car.id !== action.payload);

      state.cars = updatedCars;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

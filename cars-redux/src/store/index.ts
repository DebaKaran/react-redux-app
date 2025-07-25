import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

// Types for RootState and AppDispatch (helpful for useSelector/useDispatch with TypeScript)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar };

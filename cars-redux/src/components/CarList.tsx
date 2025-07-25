import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar, type RootState } from "../store";

const CarList = () => {
  const cars = useSelector((state: RootState) => state.cars.data);
  const dispatch = useDispatch();
  const handleCarDelete = (carId: string) => {
    dispatch(removeCar(carId));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car.id)}
        >
          Delete
        </button>
      </div>
    );
  });
  console.log(cars);
  return <div>{renderedCars}</div>;
};

export default CarList;

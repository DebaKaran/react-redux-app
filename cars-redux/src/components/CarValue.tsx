import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

const CarValue = () => {
  const totalCost = useSelector((state: RootState) => {
    const { data, searchTerm } = state.cars;

    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let cost = 0;
    for (const car of filteredCars) {
      cost += car.cost;
    }
    return cost;
  });
  return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;

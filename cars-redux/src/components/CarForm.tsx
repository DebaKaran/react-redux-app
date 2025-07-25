import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName, type RootState } from "../store";
import type { FormState } from "../store/slices/formSlice";

const CarForm = () => {
  const dispatch = useDispatch();

  const name = useSelector((state: RootState) => state.form.name);
  const cost = useSelector((state: RootState) => state.form.cost);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //Even when you set <input type="number" />,
    // the value returned from event.target.value is still a string, not a number.
    const cost = parseInt(event.target.value) || 0;
    dispatch(changeCost(cost));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCar: FormState = { name, cost };
    dispatch(addCar(newCar));
  };
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || " "}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button islink">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;

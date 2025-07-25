import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, type RootState } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const name = useSelector((state: RootState) => state.form.name);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;

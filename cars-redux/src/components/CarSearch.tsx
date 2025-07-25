import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, type RootState } from "../store";

const CarSearch = () => {
  const dispath = useDispatch();
  const searchTerm = useSelector((state: RootState) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispath(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="labe">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default CarSearch;

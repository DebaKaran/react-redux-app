import { useDispatch, useSelector } from "react-redux";
import { removeCar, type RootState } from "../store";

const CarList = () => {
  //const cars = useSelector((state: RootState) => state.cars.data);

  const { cars, name } = useSelector((state: RootState) => {
    const { data, searchTerm } = state.cars;
    const { name } = state.form;
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(name.toLowerCase());
    });
    return {
      cars: filteredCars,
      name: name,
    };
  });

  const dispatch = useDispatch();
  const handleCarDelete = (carId: string) => {
    dispatch(removeCar(carId));
  };

  const renderedCars = cars.map((car) => {
    //decide if the car should be bold
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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

  return <div>{renderedCars}</div>;
};

export default CarList;

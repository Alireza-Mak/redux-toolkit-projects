import { useAppSelector } from '../../hooks/use-state';
import { Car } from '../../store';
import CarShow from './CarShow';

const CarList = () => {
  let { cars, searchTerm } = useAppSelector(({ allCars }) => {
    return allCars;
  });
  cars = cars.filter((car:Car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderCars = cars.map((car:Car) => {
    return <CarShow key={car.id} car={car} />;
  });

  return <ul>{renderCars}</ul>;
};

export default CarList;

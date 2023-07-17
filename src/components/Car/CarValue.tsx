import { useAppSelector } from '../../hooks/use-state';
import { Car } from '../../store';
import { decimalDetector, formatted_number } from '../../utils';

const CarValue = () => {
  let { cars, searchTerm } = useAppSelector(({ allCars }) => allCars);
  cars = cars.filter((car:Car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  let renderValues = '';
  let value = 0;
  cars.forEach((car:Car) => {
    const cost = car.cost;
    const newCost = decimalDetector(cost);
    value += newCost;
    renderValues = '$' + formatted_number(value.toString());
  });

  return (
    <div className="flex my-4 justify-end font-bold text-lg">
      Total Value: {renderValues || '$0'}
    </div>
  );
};

export default CarValue;

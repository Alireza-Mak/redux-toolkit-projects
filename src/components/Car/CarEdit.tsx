import { ChangeEvent, FormEvent, useEffect } from 'react';
import {
  Car,
  changeEditingCost,
  changeEditingName,
  toggleEditCar,
  editingCar,
} from '../../store';
import Button from '../Button/Button';
import { formatted_number } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks/use-state';

type Props = {
  car: Car;
};

const CarEdit = ({ car }: Props) => {
  const dispatch = useAppDispatch();
  const { cost, name } = useAppSelector(({ editCar }) => {
    return editCar;
  });

  useEffect(() => {
    dispatch(changeEditingName(car.name));
    dispatch(changeEditingCost(car.cost));
  }, [dispatch, car.name, car.cost]);
  const onSubmitClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(toggleEditCar(''));
    dispatch(editingCar({ id: car.id, name, cost }));
  };
  const ChangeCarModel = (event: ChangeEvent<HTMLInputElement>) => {
    const model = event.target.value;
    dispatch(changeEditingName(model));
  };
  const ChangeCarValue = (event: ChangeEvent<HTMLInputElement>) => {
    const cost = event.target.value;
    dispatch(changeEditingCost(formatted_number(cost)));
  };
  return (
    <form
      onSubmit={onSubmitClick}
      className="w-full flex flex-col sm:flex-row items-center justify-between"
    >
      <div className="w-full flex items-center mb-4 sm:mb-0 mr-0 sm:mr-5">
        <label
          htmlFor="edit-car-model"
          className="font-medium leading-6 text-gray-900 mr-3"
        >
          Car Model
        </label>
        <input
          onChange={ChangeCarModel}
          type="text"
          value={name}
          name="edit-car-model"
          id="edit-car-model"
          required
          autoComplete="off"
          placeholder="BMW"
          className="flex-1 w-[inherit] rounded-md border-0 p-1.5 text-gray-900 shadow-sm outline-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-[#3dc817] sm:text-sm sm:leading-6"
        />
      </div>
      <div className="w-full flex items-center mb-4 sm:mb-0 mr-0 sm:mr-5 mr-0 sm:mr-[36px]">
        <label
          htmlFor="edit-car-value"
          className="font-medium leading-6 text-gray-900 mr-3"
        >
          Car Value
        </label>

        <input
          onChange={ChangeCarValue}
          required
          type="text"
          name="edit-car-value"
          id="edit-car-value"
          value={cost || ''}
          placeholder="$60,000"
          autoComplete="off"
          className="flex-1 w-[inherit] no-number-icon rounded-md border-0 p-1.5 text-gray-900 outline-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3dc817] sm:text-sm sm:leading-6"
        />
      </div>
      <Button className="w-full sm:w-auto sm:my-0" rounded primary>
        Edit
      </Button>
    </form>
  );
};

export default CarEdit;

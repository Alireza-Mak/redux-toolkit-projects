import { useRef } from 'react';
import Button from '../Button/Button';
import { addCars, changeCost, changeName } from '../../store';
import { capital_letter, formatted_number } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks/use-state';

const CarForm = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { name, cost } = useAppSelector(({ addcar }) => addcar);
  const ChangeCarModel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = capital_letter(event.target.value);
    dispatch(changeName(value));
  };
  const ChangeCarValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatted_number(event.target.value);
    dispatch(changeCost(value));
  };
  const onSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addCars({ name, cost }));
    inputNameRef.current!.focus();
  };
  return (
    <form
      onSubmit={onSubmitClick}
      className="flex flex-wrap flex-col sm:flex-row sm:items-end justify-between shadow-lg border rounded py-5 px-2"
    >
      <div className="flex-1 mb-4 sm:mb-0 sm:mr-5">
        <label
          htmlFor="car-model"
          className="block font-medium leading-6 text-gray-900"
        >
          Car Model
        </label>
        <div className="mt-2">
          <input
            ref={inputNameRef}
            onChange={ChangeCarModel}
            type="text"
            value={name}
            name="car-model"
            id="car-model"
            required
            autoComplete="off"
            placeholder="BMW"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm outline-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-[#572773] sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="flex-1 mb-4 sm:mb-0 sm:mr-5">
        <label
          htmlFor="car-value"
          className="block font-medium leading-6 text-gray-900"
        >
          Car Value
        </label>
        <div className="mt-2">
          <input
            onChange={ChangeCarValue}
            required
            type="text"
            name="car-value"
            id="car-value"
            value={cost || ''}
            placeholder="$60,000"
            autoComplete="off"
            className="no-number-icon block w-full rounded-md border-0 p-1.5 text-gray-900 outline-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#572773] sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <Button className="sm:my-0" rounded primary>
        Submit
      </Button>
    </form>
  );
};

export default CarForm;

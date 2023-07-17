import { changeSearchTerm } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks/use-state';

const CarSearch = () => {
  const dispatch = useAppDispatch();
  const { searchTerm } = useAppSelector(({ allCars }) => {
    return allCars;
  });
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(changeSearchTerm(value));
  };
  return (
    <div className="flex flex-wrap flex-col sm:flex-row items-center my-5 justify-between">
      <div className="flex-1 sm:mr-5">
        <div className="text-xl font-bold text-gray-600">Cars List</div>
      </div>
      <div className="w-full sm:w-auto flex items-center mb-4 sm:mb-0 order-first sm:order-last">
        <label
          htmlFor="car-search"
          className="inline-block mr-5 font-medium leading-6 text-gray-900"
        >
          Search
        </label>

        <input
          onChange={handleChangeSearch}
          value={searchTerm}
          type="text"
          name="car-search"
          id="car-search"
          placeholder="BMW"
          autoComplete="off"
          className="w-full inline-block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 outline-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#572773] sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default CarSearch;

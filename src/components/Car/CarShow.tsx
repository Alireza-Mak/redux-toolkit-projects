import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Car, RootState, removeCar, toggleEditCar } from '../../store';
import Button from '../Button/Button';
import CarEdit from './CarEdit';
import { decimalDetector, formatted_number } from '../../utils';
import Modal from '../Modal/Modal';

type Props = { car: Car };

const CarShow = ({ car }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleHideModal = () => {
    setShowModal(false);
  };
  const handleActionModal = () => {
    dispatch(removeCar(car.id));
  };
  const actionBar = (
    <>
      <Button
        onClick={handleActionModal}
        className="sm:px-10 mr-3"
        danger
        rounded
      >
        YES
      </Button>
      <Button
        onClick={handleHideModal}
        className="sm:px-10 sm:px-auto"
        secondary
        rounded
      >
        NO
      </Button>
    </>
  );
  let { addcar, allCars } = useSelector(({ addcar, allCars }: RootState) => {
    return { addcar, allCars };
  });
  const { showEditCar } = allCars;
  const { name } = addcar;
  const dispatch = useDispatch();
  const handleEditCar = () => {
    dispatch(toggleEditCar(car.id));
  };
  const handleCarDelete = () => {
    setShowModal(true);
  };
  const show = (
    <>
      <div className="flex-1 break-all text-lg text-gray-600">
        {car.name} - ${formatted_number(decimalDetector(car.cost).toString())}
      </div>
      <div className="w-full sm:w-auto flex items-center justify-between">
        <Button
          onClick={handleEditCar}
          className="w-full sm:w-auto mr-5 my-4 sm:my-0"
          success
          rounded
        >
          Edit
        </Button>
        <Button
          onClick={handleCarDelete}
          className="w-full sm:w-auto"
          danger
          rounded
        >
          Delete
        </Button>
        {showModal && (
          <Modal
            actionBar={actionBar}
            hideModal={handleHideModal}
            title="Delete"
            content="Are you sure to delete this car?"
          />
        )}
      </div>
    </>
  );
  const content = showEditCar === car.id ? <CarEdit car={car} /> : show;
  const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
  return (
    <li
      key={car.id}
      className={`${
        bold ? 'font-bold bg-red-100' : ''
      } flex flex-col sm:flex-row items-center shadow-lg mb-4 border rounded py-3 px-2`}
    >
      {content}
    </li>
  );
};

export default CarShow;

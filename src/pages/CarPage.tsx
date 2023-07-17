import CarForm from '../components/Car/CarForm';
import CarList from '../components/Car/CarList';
import CarSearch from '../components/Car/CarSearch';
import CarValue from '../components/Car/CarValue';

const CarPage = () => {
  return (
    <div className="flex flex-col">
      <CarForm />
      <CarSearch />
      <CarList />
      <hr className='border rounded shadow-lg' />
      <CarValue />
    </div>
  );
};

export  {CarPage};

import { useAppDispatch } from '../../hooks/use-state';
import { Photo, addSinglePhoto } from '../../store';
import Button from '../Button/Button';

type Props = { item: Photo };

const ListItem = ({ item }: Props) => {
  const dispatch=useAppDispatch()
  const handleClick = () => {
    dispatch(addSinglePhoto(item))
  }
  return (
    <div className=" overflow-hidden ">
      <a href={item.imageUrl} target="_blank" rel="noreferrer">
        <img
          className="object-cover rounded transition duration-150 ease-out hover:ease-in w-full h-32 hover:grayscale  hover:scale-95"
          src={item.imageUrl}
          alt={item.model}
        />
      </a>
      <div className="my-2 flex flex-wrap justify-between items-center text-[14px]">
        <div className="font-bold">{item.brand}</div>
        <Button onClick={handleClick} rounded primary>
          Details
        </Button>
      </div>
    </div>
  );
};

export default ListItem;

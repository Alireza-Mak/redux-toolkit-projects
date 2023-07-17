import classNames from 'classnames';
import {
  PictureType,
  useDeletePictureMutation,
} from '../../../store';
import Button from '../../Button/Button';
import { AiFillDelete } from 'react-icons/ai';


type Props = { picture: PictureType };

const PicturesListItems = ({ picture }: Props) => {
  const [deletePicture, results] = useDeletePictureMutation();
  const handleDeletePicture = () => {
    deletePicture(picture);
  };
  const deleteBtnContainer = classNames(
    results.isLoading ? 'bg-gray-200 opacity-100' : 'opacity-0',
    'absolute inset-0 flex items-center justify-center hover:bg-gray-200 hover:opacity-80'
  );
  return (
    <div
      onClick={handleDeletePicture}
      key={picture.id}
      className="relative cursor-pointer m-2 rounded overflow-hidden"
    >
      {results.error && <div>Error in deleting Picture!!</div>}
      <img
        className="h-20 w-20"
        src={picture.pictureUrl}
        alt={picture.pictureUrl}
      />
      <div className={deleteBtnContainer}>
        <Button
          className="text-3xl text-red-500"
          loading={results.isLoading}
        >
          <AiFillDelete />
        </Button>
      </div>
    </div>
  );
};

export default PicturesListItems;

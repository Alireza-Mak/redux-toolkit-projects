import { AiFillDelete } from 'react-icons/ai';
import Button from '../../Button/Button';
import ExpandablePanel from '../../Panel/ExpandablePanel';
import PicturesList from '../Pictures/PicturesList';
import { AlbumType, useDeleteAlbumMutation } from '../../../store';

type Props = { album: AlbumType };

const AlbumsListItem = ({ album }: Props) => {
  const [deleteAlbum, results] = useDeleteAlbumMutation();
  const handleDeleteAlbum = () => {
    deleteAlbum(album);
  };
  const header = (
    <>
      <Button
        className="mr-3 hover:bg-[#4D2776] hover:text-white bg-[#79272F] text-white h-8"
        rounded
        onClick={handleDeleteAlbum}
        loading={results.isLoading}
      >
        <AiFillDelete className="text-xl" />
      </Button>
      {results.error && <div>Error in deleting Albums!!</div>}
      <p className="mb-1 font-medium">{album.albumName}</p>
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <PicturesList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;

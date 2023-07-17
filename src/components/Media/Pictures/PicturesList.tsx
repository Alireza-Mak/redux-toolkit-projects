import {
  AlbumType,
  PictureType,
  useAddPictureMutation,
  useFetchPicturesQuery,
} from '../../../store';
import HeaderPanel from '../../Panel/HeaderPanel';
import Skeleton from '../../Skeleton/Skeleton';
import PicturesListItems from './PicturesListItems';

type Props = { album: AlbumType };

const PicturesList = ({ album }: Props) => {
  const { isFetching, error, data } = useFetchPicturesQuery(album);
  const [addPicture, results] = useAddPictureMutation();
  let content;
  if (isFetching) {
    if (data && data.length > 0) {
      content = <Skeleton className="h-20 w-20 m-2" time={data.length} />;
    } else {
      content = <Skeleton className="h-20 w-20 m-2" time={1} />;
    }
  } else if (error) {
    content = <div>Error in loading pictures!!</div>;
  } else {
    if (data && data.length > 0) {
      content = data.map((picture: PictureType) => {
        return <PicturesListItems picture={picture} key={picture.id} />;
      });
    } else {
      content = (
        <div className="font-bold text-xs text-gray-500 animate-pulse">
          There is no picture for {album.albumName} album to show.
        </div>
      );
    }
  }
  const handleAddPicture = () => {
    addPicture(album);
  };
  return (
    <HeaderPanel
      loading={results.isLoading}
      error={results.error}
      label={`Photos for ${album.albumName}`}
      btnLabel="+ Add Photo"
      btnAction={handleAddPicture}
    >
      <div className="flex justify-center">{content}</div>
    </HeaderPanel>
  );
};

export default PicturesList;

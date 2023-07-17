import {
  AlbumType,
  UserType,
  useAddAlbumMutation,
  useFetchAlbumsQuery,
} from '../../../store';
import HeaderPanel from '../../Panel/HeaderPanel';
import Skeleton from '../../Skeleton/Skeleton';
import AlbumsListItem from './AlbumsListItem';

type Props = { user: UserType };

const AlbumsList = ({ user }: Props) => {
  const { error, isFetching, data } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const handleAddAlbum = () => {
    addAlbum(user);
  };
  let content;
  if (isFetching) {
    if (data && data.length > 0) {
      content = <Skeleton className="h-10" time={data.length} />;
    } else {
      content = <Skeleton className="h-10" time={1} />;
    }
  } else if (error) {
    content = <div>Error in loading Albums!!</div>;
  } else {
    if (data && data.length > 0) {
      content = data.map((album: AlbumType) => {
        return <AlbumsListItem album={album} key={album.id} />;
      });
    } else {
      content = (
        <div className="font-bold text-xs text-gray-500 animate-pulse">
          There is no album for {user.userName} user to show.
        </div>
      );
    }
  }

  return (
    <HeaderPanel
      loading={results.isLoading}
      error={results.error}
      label={`Albums for ${user.userName}`}
      btnLabel="+ Add Album"
      btnAction={handleAddAlbum}
    >
      {content}
    </HeaderPanel>
  );
};

export default AlbumsList;

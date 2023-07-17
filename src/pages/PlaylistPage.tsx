import { useAppDispatch, useAppSelector } from '../hooks/use-state';
import Button from '../components/Button/Button';
import Playlist from '../components/Playlist/Playlist';
import { songCreator, movieCreator } from '../data/faker';
import { addMovie, addSong, removeMovie, removeSong, resetApp } from '../store';

const PlaylistPage = () => {
  const dispatch = useAppDispatch();
  const onAddItemClick = (label: string) => {
    switch (label) {
      case 'Movies Playlist':
        dispatch(addMovie(movieCreator()));
        break;
      case 'Songs Playlist':
        dispatch(addSong(songCreator()));
        break;
    }
  };
  const onDeleteItemClick = (label: string, id: string) => {
    switch (label) {
      case 'Movies Playlist':
        dispatch(removeMovie(id));
        break;
      case 'Songs Playlist':
        dispatch(removeSong(id));
        break;
    }
  };

  const { songs, movies } = useAppSelector(({ songs, movies }) => {
    return {
      songs,
      movies,
    };
  });
  const onResetPlaylistClick = () => {
    dispatch(resetApp());
  };
  return (
    <>
      <Button danger rounded onClick={onResetPlaylistClick}>
        Reset Both Playlists
      </Button>
      <div className="flex flex-col sm:flex-row justify-between items-start">
        <Playlist
          playlist={movies}
          onAddItemClick={onAddItemClick}
          onDeleteItemClick={onDeleteItemClick}
          className="sm:pr-4"
          label="Movies Playlist"
          btnLabel="+ Add Movie"
        />
        <Playlist
          playlist={songs}
          onAddItemClick={onAddItemClick}
          onDeleteItemClick={onDeleteItemClick}
          className="sm:pl-4"
          label="Songs Playlist"
          btnLabel="+ Add Song"
        />
      </div>
    </>
  );
};

export { PlaylistPage };

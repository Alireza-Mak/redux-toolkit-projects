import { PlaylistItemType, PlaylistType } from '../../store';
import Button from '../Button/Button';
import ClassNames from 'classnames';

interface PlaylistProps {
  btnLabel: React.ReactNode;
  label: string;
  className?: string;
  playlist: PlaylistType;
  onAddItemClick: (label: string) => void;
  onDeleteItemClick: (label: string, id: string) => void;
}
const Playlist: React.FC<PlaylistProps> = ({
  label,
  btnLabel,
  className,
  onAddItemClick,
  onDeleteItemClick,
  playlist,
}) => {
  const finalClass = ClassNames(
    'flex flex-col justify-center items-between my-4 w-full',
    className
  );
  const handleAddItem = () => {
    onAddItemClick(label);
  };
  const handleDeleteItem = (id: string) => {
    onDeleteItemClick(label, id);
  };
  const renderPlaylist = playlist.map(({ id, label }: PlaylistItemType) => {
    return (
      <div
        key={id}
        className="flex justify-between items-center border-y-2 mt-4 py-3"
      >
        <div className="sm:text-xl">{label}</div>
        <Button danger rounded onClick={() => handleDeleteItem(id)}>
          X
        </Button>
      </div>
    );
  });
  return (
    <div className={finalClass}>
      <div className="flex justify-between items-center">
        <div className="sm:text-xl font-bold">{label}</div>
        <Button onClick={handleAddItem} primary rounded>
          {btnLabel}
        </Button>
      </div>
      {renderPlaylist}
    </div>
  );
};

export default Playlist;

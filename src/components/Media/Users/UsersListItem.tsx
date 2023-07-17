import { useThunk } from '../../../hooks/use-thunk';
import { deleteUser, UserType } from '../../../store';
import Button from '../../Button/Button';
import ExpandablePanel from '../../Panel/ExpandablePanel';
import AlbumsList from '../Albums/AlbumsList';
import { AiFillDelete } from 'react-icons/ai';

type Props = { user: UserType };

const UsersListItem = ({ user }: Props) => {
  const {
    error: errorDeletUser,
    isLoading: loadingUserDelete,
    runThunk:DeletingUser,
  } = useThunk(deleteUser);
  const handleDeleteUser = () => {
    DeletingUser(user)
  };
  const header = (
    <>
      <Button
        onClick={handleDeleteUser}
        className="mr-3 hover:bg-[#4D2776] hover:text-white bg-[#79272F] text-white h-8"
        rounded
        loading={loadingUserDelete}
      >
        <AiFillDelete />
      </Button>
      {errorDeletUser ? errorDeletUser.stack : null}
      <p className="mb-1 font-medium">{user.userName}</p>
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;

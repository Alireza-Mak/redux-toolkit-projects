import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/use-state';
import { RootState, UserType, addUser, fetchUsers } from '../../../store';
import Skeleton from '../../Skeleton/Skeleton';
import { useThunk } from '../../../hooks/use-thunk';
import UsersListItem from './UsersListItem';
import HeaderPanel from '../../Panel/HeaderPanel';

const UsersList = () => {
  const {
    error: errorFetchusers,
    isLoading: LoadingFetchUsers,
    runThunk: fetchingUsers,
  } = useThunk(fetchUsers);
  const {
    error: errorAddUser,
    isLoading: LoadingAddUser,
    runThunk: AddUser,
  } = useThunk(addUser);
  const users = useAppSelector(({ users }: RootState) => {
    return users;
  });

  useEffect(() => {
    fetchingUsers();
  }, [fetchingUsers]);
  const handleAddUser = () => {
    AddUser();
  };
  let content;
  if (LoadingFetchUsers) {
    if (users.length) {
      content = <Skeleton className="h-10" time={users.length} />;
    } else {
      content = <Skeleton className="h-10" time={7} />;
    }
  } else if (errorFetchusers) {
    content = <div>{errorFetchusers.stack}</div>;
  } else {
    if (users && users.length > 0) {
      content = users.map((user: UserType) => {
        return <UsersListItem user={user} key={user.id} />;
      });
    } else {
      content = (
        <div className="font-bold text-xs text-gray-500 animate-pulse">
          There is no user to show.
        </div>
      );
    }
  }
  return (
    <HeaderPanel
      btnLabel="+ Add User"
      label="Users"
      btnAction={handleAddUser}
      error={errorAddUser}
      loading={LoadingAddUser}
    >
      {content}
    </HeaderPanel>
  );
};

export default UsersList;

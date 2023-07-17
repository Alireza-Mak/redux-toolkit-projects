import { createSlice } from '@reduxjs/toolkit';
import {
  UsersType,
  fetchUsersAction,
  addUserAction,
  deleteUserAction,
  UserType,
} from '../../types/media';
import { fetchUsers } from '../../thunks/media/fetchUsers';
import { addUser } from '../../thunks/media/addUser';
import { deleteUser } from '../../thunks/media/deleteUser';

const usersSlice = createSlice({
  name: 'users',
  initialState: [] as UsersType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: fetchUsersAction) => (state = action.payload)
    );
    builder.addCase(addUser.fulfilled, (state, action: addUserAction) => [
      ...state,
      action.payload,
    ]);
    builder.addCase(deleteUser.fulfilled, (state, action: deleteUserAction) => [
      ...state.filter((user: UserType) => user.id !== action.payload.id),
    ]);
  },
});

export const usersReducer = usersSlice.reducer;

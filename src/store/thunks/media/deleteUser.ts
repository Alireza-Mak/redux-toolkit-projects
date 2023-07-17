import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserType } from '../../types/media';
import axios from 'axios';

import { delay_in_fetch } from '../../../utils';
import url from '../../urls';

const deleteUser = createAsyncThunk('users/delete', async (user: UserType) => {
  await axios.delete<{}>(`${url}/users/${user.id}`);
  await delay_in_fetch();
  return user;
});

export { deleteUser };

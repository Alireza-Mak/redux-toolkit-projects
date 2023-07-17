import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserType } from '../../types/media';
import { delay_in_fetch } from '../../../utils';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get<UserType[]>('http://localhost:3001/users');
  await delay_in_fetch();
  return response.data;
});

export { fetchUsers };

import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserType } from '../../types/media';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import { delay_in_fetch } from '../../../utils';
import url from '../../urls';



const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post<UserType>(`${url}/users`, {
    userName: faker.internet.userName(),
  });
  await delay_in_fetch();
  return response.data;
});
export { addUser };

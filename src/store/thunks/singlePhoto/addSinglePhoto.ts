import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Photo } from '../../../store';
import { delay_in_fetch } from '../../../utils';
import url from '../../urls';

const addSinglePhoto = createAsyncThunk('singlePhoto/add', async (item:Photo) => {
  const response = await axios.post<Photo>(`${url}/car`, item);
    await delay_in_fetch();
  return response.data;
});

export { addSinglePhoto };

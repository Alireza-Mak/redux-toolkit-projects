import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { delay_in_fetch } from '../../../utils';
import { Photos } from '../../index';
import url from '../../urls';

export interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}
const fetchPhotos = createAsyncThunk('photos/fetch', async () => {
  const response = await axios.get<Photos>(`${url}/cars`);
  await delay_in_fetch();
  return response.data;
});



export { fetchPhotos };

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Photo} from '../../../store';
import { delay_in_fetch } from '../../../utils';
import url from '../../urls';

const fetchSinglePhoto = createAsyncThunk('singlePhoto/fetch', async () => {
  const response = await axios.get<Photo>(`${url}/car`);
  await delay_in_fetch();
  return response.data;
});

export { fetchSinglePhoto };



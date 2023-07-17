import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Photo } from '../../types/photo';

import { delay_in_fetch } from '../../../utils';
import url from '../../urls';

const editPhotos = createAsyncThunk('photos/edit', async (photo: Photo) => {
  const response = await axios.put<Photo>(
    `${url}/cars/${photo.id}`,
    {
      ...photo,
    }
  );
    await delay_in_fetch();
  return response.data;
});
export { editPhotos };

import { createSlice } from '@reduxjs/toolkit';
import {
  EditCarType,
  ChangeEditingCostAction,
  ChangeEditingNameAction,
} from '../../index';

const editCarSlice = createSlice({
  name: 'edit',
  initialState: { name: '', cost: '' } as EditCarType,
  reducers: {
    changeEditingName: (
      state: EditCarType,
      action: ChangeEditingNameAction
    ) => {
      return { ...state, name: action.payload };
    },
    changeEditingCost: (
      state: EditCarType,
      action: ChangeEditingCostAction
    ) => {
      return { ...state, cost: action.payload };
    },
  },
});

export const editCarReducer = editCarSlice.reducer;
export const { changeEditingName, changeEditingCost } = editCarSlice.actions;

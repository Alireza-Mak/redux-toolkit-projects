import { createSlice } from '@reduxjs/toolkit';
import { ChangeCostAction, ChangeNameAction, AddCarType } from '../../index';
import { addCars } from '../car/carsSlice';

const addCarSlice = createSlice({
  name: 'add',
  initialState: { name: '', cost: '' } as AddCarType,
  reducers: {
    changeName: (state: AddCarType, action: ChangeNameAction) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    changeCost: (state: AddCarType, action: ChangeCostAction) => {
      return { ...state, cost: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCars, () => {
      return { name: '', cost: '' };
    });
  },
});
export const { changeCost, changeName } = addCarSlice.actions;
export const addCarReducer = addCarSlice.reducer;

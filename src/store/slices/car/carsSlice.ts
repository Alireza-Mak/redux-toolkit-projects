import { createSlice, nanoid } from '@reduxjs/toolkit';
import {
  AddCarsAction,
  Car,
  CarsType,
  EditingCarAction,
  RemoveCarAction,
  ToggleEditCarAction,
} from '../../index';

const carsSlice = createSlice({
  name: 'cars',
  initialState: { searchTerm: '', showEditCar: '', cars: [] } as CarsType,
  reducers: {
    addCars: (state: CarsType, action: AddCarsAction) => {
      return {
        ...state,
        cars: [
          ...state.cars,
          {
            name: action.payload.name,
            cost: action.payload.cost,
            id: nanoid(),
          },
        ],
      };
    },
    removeCar: (state: CarsType, action: RemoveCarAction) => {
      return {
        ...state,
        cars: [...state.cars.filter((car: Car) => car.id !== action.payload)],
      };
    },
    toggleEditCar: (state: CarsType, action: ToggleEditCarAction) => {
      return { ...state, showEditCar: action.payload };
    },
    editingCar: (state: CarsType, action: EditingCarAction) => {
      const newCars = state.cars.map((car: Car) => {
        if (car.id === action.payload.id) {
          return {
            ...car,
            name: action.payload.name,
            cost: action.payload.cost,
          };
        }
        return { ...car };
      });
      return { ...state, cars: newCars };
    },
    changeSearchTerm: (state: CarsType, action) => {
      return { ...state, searchTerm: action.payload };
    },
  },
});

export const carsReducer = carsSlice.reducer;
export const {
  addCars,
  editingCar,
  toggleEditCar,
  removeCar,
  changeSearchTerm,
} = carsSlice.actions;

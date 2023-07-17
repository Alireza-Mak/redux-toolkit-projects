// Add Car Slice Types
export type AddCarType = {
  name: string;
  cost: string;
};
export type ChangeNameAction = {
  type: string;
  payload: string;
};
export type ChangeCostAction = {
  type: string;
  payload: string;
};

// Eit Car Slice Types
export type EditCarType = {
  name: string;
  cost: string;
};
export type ChangeEditingNameAction = {
  type: string;
  payload: string;
};
export type ChangeEditingCostAction = {
  type: string;
  payload: string;
};

// Cars Slice Types
export interface Car {
  name: string;
  cost: string;
  id: string;
}
export type EditingCarAction = {
  type: any;
  payload: { id: string; name: string; cost: string };
};
export type ToggleEditCarAction = {
  type: string;
  payload: string;
};
export type RemoveCarAction = {
  type: string;
  payload: string;
};
export type AddCarsAction = {
  type: string;
  payload: { name: string; cost: string };
};

export type CarsType = { searchTerm: string; showEditCar: string; cars: Car[] };

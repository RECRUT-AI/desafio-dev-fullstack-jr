import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface Pet {
  id: number;
  name: string;
  age: number;
  type: string;
  breed: string;
  owner: string;
  ownerPhone: string;
}

interface PetState {
  arrayOfPets: Pet[];
}

const initialState: PetState = {
  arrayOfPets: [],
};

const petSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<Pet[]>) => {
      state.arrayOfPets = action.payload;
    },
    removeFromList: (state, action: PayloadAction<number>) => {
      state.arrayOfPets = state.arrayOfPets
        .filter(item => item.id !== action.payload);
    },
  },
});

export const { setPets, removeFromList } = petSlice.actions;

export const selectPet =
  (state: RootState) => state.pets.arrayOfPets;

export default petSlice.reducer;
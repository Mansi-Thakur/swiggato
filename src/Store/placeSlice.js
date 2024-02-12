// placesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  places: [],
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPlaces(state, action) {
      state.places = action.payload;
    },
    addPlaces(state, action) {
      state.places = [...state.places, ...action.payload];
    },
  },
});

export const { setPlaces, addPlaces } = placesSlice.actions;
export default placesSlice.reducer;

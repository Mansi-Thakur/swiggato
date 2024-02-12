// store.js

import { configureStore } from '@reduxjs/toolkit';
import placeReducer from './placeSlice.js'; // Adjust the import to use placeSlice.reducer

const store = configureStore({
  reducer: {
    places: placeReducer, // Adjust the reducer key to match the imported reducer
    // Add other reducers here if you have more
  },
});

export default store;

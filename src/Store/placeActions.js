// placesActions.js

import { setPlaces, addPlaces } from './placeSlice.js';

export const fetchNearbyPlaces = (results) => async (dispatch) => {
  // Dispatch the setPlaces action to update the places state
  dispatch(setPlaces(results));
  console.log(results,'hghghghgh')
};

export const addMorePlaces = (results) => async (dispatch) => {
  // Dispatch the addPlaces action to add more places to the existing state
  dispatch(addPlaces(results));
};

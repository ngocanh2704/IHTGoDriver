import { SET_LOCATION } from "../actions/types";

const initialState = {
  lat: "",
  lng: "",
  updateCounter: 0
};

export default function(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
        updateCounter: state.updateCounter + 1
      };
    default:
      return state;
  }
}

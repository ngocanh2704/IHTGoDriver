import {
  SET_LOCATION,
  SET_LOCATION_ERROR,
  BLOCK_LOCATION,
  UNBLOCK_LOCATION
} from "../actions/types";

const initialState = {
  lat: "",
  lng: "",
  updateCounter: 0,
  error: "no error",
  block: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
        updateCounter: state.updateCounter + 1,
        error: ""
      };
    case SET_LOCATION_ERROR:
      return {
        ...state,
        error: action.error
      };
    case BLOCK_LOCATION:
      return {
        ...state,
        block: true
      };
    case UNBLOCK_LOCATION:
      return {
        ...state,
        block: false
      };
    default:
      return state;
  }
}

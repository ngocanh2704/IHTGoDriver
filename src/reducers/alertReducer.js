import { SET_ALERT } from "../actions/types";

const initialState = {
  alert: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.alert
      };
    default:
      return state;
  }
}

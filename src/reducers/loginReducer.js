import { SET_USERNAME, SET_PASSWORD } from "./../actions/types";

const initialState = {
  username: "",
  password: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
}

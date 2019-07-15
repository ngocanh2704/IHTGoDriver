import {
  SET_USER_INFO,
  SET_NAME,
  SET_EMAIL,
  SET_PHONE
} from "../actions/types";

const initialState = {
  id: "",
  name: "",
  phone: "",
  email: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        id: action.id,
        name: action.name,
        phone: action.phone,
        email: action.email
      };
    case SET_NAME:
      return {
        ...state,
        name: action.name
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.phone
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.email
      };
    default:
      return state;
  }
}

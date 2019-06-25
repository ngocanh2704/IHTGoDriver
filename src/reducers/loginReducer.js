import { SET_USERNAME } from "./../actions/types";

const initialState = {
  title: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      console.log(state);
      console.log("reducer" + action.value);
      const newState = {
        ...state,
        title: 12345
      };
      return newState;
    default:
      return state;
  }
}

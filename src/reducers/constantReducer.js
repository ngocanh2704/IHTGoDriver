import { SET_USERNAME, SET_PASSWORD } from "./../actions/types";

const initialState = {
  isSpeed: { 0: "Giao thường", 1: "Giao hỏa tốc" },
  orderType: {
    1: "Giao hàng nội tỉnh",
    2: "Giao chứng từ",
    3: "Giao hàng ngoại tỉnh"
  }
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

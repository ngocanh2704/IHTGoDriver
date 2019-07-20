import {
  SET_CURRENT_ORDER,
  SET_ORDER_BOOKMARK,
  REMOVE_ORDER_BOOKMARK
} from "../actions/types";

const initialState = {
  id: 0,
  sender_number: 0,
  receive_number: 0,
  current_status: 4,
  isSpeed: { 0: "Giao thường", 1: "Giao hỏa tốc" },
  orderType: {
    1: "Giao hàng nội tỉnh",
    2: "Giao chứng từ",
    3: "Giao hàng ngoại tỉnh"
  },
  orderStatus: {
    2: "chưa giao",
    3: "đang giao",
    4: "đã giao"
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ORDER:
      return {
        ...state,
        id: action.id,
        sender_number: action.sender_number,
        receive_number: action.receive_number,
        current_status: action.current_status
      };
    case SET_ORDER_BOOKMARK:
      return {
        ...state,
        current_status: 3
      };
    case REMOVE_ORDER_BOOKMARK:
      return {
        ...state,
        current_status: 4
      };
    default:
      return state;
  }
}

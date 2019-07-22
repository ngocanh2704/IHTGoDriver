import {
  SET_ALL_ORDERS,
  SET_WAITING_ORDERS,
  SET_FINISH_ORDERS,
  ADD_ALL_ORDER,
  ADD_WAITING_ORDER,
  ADD_FINISH_ORDER
} from "../actions/types";

const initialState = {
  allOrders: [],
  waitingOrders: [],
  finishOrders: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_ORDERS:
      return { ...state, allOrders: [...state.allOrders, ...action.orders] };
    case SET_WAITING_ORDERS:
      return {
        ...state,
        waitingOrders: [...state.waitingOrders, ...action.orders]
      };
    case SET_FINISH_ORDERS:
      return {
        ...state,
        finishOrders: [...state.finishOrders, ...action.orders]
      };
    case ADD_ALL_ORDER:
      return { ...state, allOrders: [action.order, ...state.allOrders] };
    case ADD_WAITING_ORDER:
      return {
        ...state,
        waitingOrders: [action.order, ...state.waitingOrders]
      };
    case ADD_FINISH_ORDER:
      return {
        ...state,
        finishOrders: [action.order, ...state.finishOrders]
      };
    default:
      return state;
  }
}

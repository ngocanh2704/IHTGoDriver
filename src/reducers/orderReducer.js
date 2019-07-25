import {
  SET_ALL_ORDERS,
  SET_WAITING_ORDERS,
  SET_FINISH_ORDERS,
  ADD_ALL_ORDER,
  ADD_WAITING_ORDER,
  ADD_FINISH_ORDER,
  START_SHIPPING,
  FINISH_SHIPPING,
  REMOVE_ORDER,
  RESET_ALL_ORDERS,
  RESET_FINISH_ORDERS,
  RESET_WAITING_ORDERS,
  RESET_ORDERS
} from "../actions/types";

const initialState = {
  allOrders: [],
  waitingOrders: [],
  finishOrders: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_ORDERS:
      return {
        ...initialState
      };
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
    case RESET_ALL_ORDERS:
      return { ...state, allOrders: action.orders };
    case RESET_WAITING_ORDERS:
      return {
        ...state,
        waitingOrders: action.orders
      };
    case RESET_FINISH_ORDERS:
      return {
        ...state,
        finishOrders: action.orders
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
    case START_SHIPPING:
      return {
        ...state,
        allOrders: state.allOrders.map(order =>
          order.id === action.id ? { ...order, status: 3 } : order
        ),
        waitingOrders: state.waitingOrders.map(order =>
          order.id === action.id ? { ...order, status: 3 } : order
        )
      };
    case FINISH_SHIPPING:
      return {
        ...state,
        waitingOrders: state.waitingOrders.filter(
          order => order.id !== action.id
        ),
        allOrders: state.allOrders.map(order =>
          order.id === action.id ? { ...order, status: 4 } : order
        ),
        finishOrders: [
          {
            ...state.waitingOrders.filter(order => order.id === action.id)[0],
            status: 4
          },
          ...state.finishOrders
        ]
      };
    case REMOVE_ORDER:
      return {
        ...state,
        finishOrders: state.finishOrders.filter(
          order => order.id !== parseInt(action.id)
        ),
        allOrders: state.allOrders.filter(
          order => order.id !== parseInt(action.id)
        ),
        waitingOrders: state.waitingOrders.filter(
          order => order.id !== parseInt(action.id)
        )
      };
    default:
      return state;
  }
}

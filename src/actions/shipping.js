import {
  SET_ORDER_BOOKMARK,
  REMOVE_ORDER_BOOKMARK,
  START_SHIPPING,
  FINISH_SHIPPING
} from "./types";

export const startShipping = order_id => {
  return async dispatch => {
    await dispatch({
      type: SET_ORDER_BOOKMARK,
      id: order_id
    });

    await dispatch({
      type: START_SHIPPING,
      id: order_id
    });
  };
};

export const finishShipping = order_id => {
  return async dispatch => {
    await dispatch({
      type: REMOVE_ORDER_BOOKMARK,
      id: order_id
    });

    await dispatch({
      type: FINISH_SHIPPING,
      id: order_id
    });
  };
};

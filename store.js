import rootReducer from "./src/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();

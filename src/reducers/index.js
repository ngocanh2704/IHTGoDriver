import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import locationReducer from "./locationReducer";

export default combineReducers({
  login: loginReducer,
  location: locationReducer
});

import { combineReducers } from "redux";
import user from "./user";
import board from "./board";

export default combineReducers({
  user,
  board
});

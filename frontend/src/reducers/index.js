import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

//creation of root reducer
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;

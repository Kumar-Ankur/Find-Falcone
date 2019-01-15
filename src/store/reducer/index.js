import vechileReducer from "./vechileReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  vechile: vechileReducer
});


export default rootReducer;

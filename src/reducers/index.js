import { combineReducers } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
    count: countReducer,
    user: userReducer,
});

export default appReducer;
import { combineReducers } from 'redux';
import newsReducer from "./newsReducer";
//import apiReducer from "./apiReducer";
import userReducer from "./userReducer";
export default combineReducers({
    newhot: newsReducer,
    user: userReducer
});

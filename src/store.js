import { createStore, applyMiddleware } from "redux";
//import newsReducer from "./reducers/newsReducer";
import thunk from "redux-thunk";
import reducer from "../src/reducers/index.js";
import { requestLog } from "./action/getData";
function storedashboard() {
  return createStore(reducer, applyMiddleware(thunk));
}
export default storedashboard;

import { combineReducers } from "redux";
import reducers from "./entities";

export default combineReducers({
  entities: reducers,
});

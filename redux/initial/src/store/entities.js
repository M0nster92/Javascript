import { combineReducers } from "redux";
import projectReducers from "./project";
import bugReducers from "./bugs";

export default combineReducers({
  projects: projectReducers,
  bugs: bugReducers,
});

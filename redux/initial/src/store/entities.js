import { combineReducers } from "redux";
import projectReducers from "./project";
import bugReducers from "./bugs";
import userReducers from "./user";

export default combineReducers({
  projects: projectReducers,
  bugs: bugReducers,
  users: userReducers,
});

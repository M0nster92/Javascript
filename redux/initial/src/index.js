import configureStore from "./store/configureStore";
import { projectAdded, projectDone } from "./store/project";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  getBugsByUser,
  bugAssignedToUser,
} from "./store/bugs";
import { userAdded } from "./store/user";
import * as actions from "./store/api";

const store = configureStore();

store.dispatch(
  actions.apiCallBegan({
    url: "/bugs",
    onSuccess: "bugs/bugsReceived",
  })
);

/*const store = configureBugStore();  */

/*store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));

store.dispatch(bugAdded({ description: "new bug1" }));
store.dispatch(bugAdded({ description: "new bug2" }));
store.dispatch(bugAdded({ description: "new bug3" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

store.dispatch(projectAdded({ name: "new project", done: false }));
store.dispatch(projectDone({ id: 1 }));
console.log(store.getState());

console.log(getUnresolvedBugs(store.getState()));

console.log("bugs by user", getBugsByUser(store.getState(), 1)); */

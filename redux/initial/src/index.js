import configureStore from "./store/configureStore";
import { projectAdded, projectDone } from "./store/project";

const store = configureStore();

/*const store = configureBugStore(); 

store.dispatch(bugAdded({ description: "new bug1" }));
store.dispatch(bugAdded({ description: "new bug1" }));
store.dispatch(bugResolved({ id: 1 })); */

store.dispatch(projectAdded({ name: "new project", done: false }));
store.dispatch(projectDone({ id: 1 }));
console.log(store.getState());

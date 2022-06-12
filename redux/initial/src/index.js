import store from "./store";
import { bugAdded, bugResolved } from "./action-creators";

store.dispatch(bugAdded("newbug1"));
store.dispatch(bugResolved(1));

console.log(store.getState());

import store from "./custom-redux";
import { bugAdded, bugResolved } from "./action-creators";

store.subscribe(() => console.log("state changed"));

store.dispatch(bugAdded("newbug1"));
store.dispatch(bugResolved(1));

console.log(store.getState());

//store.dispatch(bugAdded("newbug1"));
//store.dispatch(bugResolved(1));

//console.log(store.getState());

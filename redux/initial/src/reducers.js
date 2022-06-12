import * as actions from "./action-types";

let lastId = 0;

function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === actions.BUG_REMOVE) {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === actions.BUG_RESOLVED) {
    return state.map((e) =>
      e.id !== action.payload.id ? bug : { ...e, resolved: true }
    );
  }

  return state;
}

export default reducer;

import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsReceived: (state, action) => {
      state.list = action.payload;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (state, action) => {
      const index = state.list.findIndex((e) => e.id === action.payload.id);
      state.list[index].resolved = true;
    },
    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.list.findIndex((bug) => bug.id === bugId);
      state.list[index].userId = userId;
    },
  },
});

export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer;

export const getUnresolvedBugs = (state) =>
  state.entities.bugs.filter((bug) => !bug.resolved);

export const getBugsByUser = (state, id) =>
  state.entities.bugs.filter((e) => e.userId === id);

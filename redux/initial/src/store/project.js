import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
        done: action.payload.done,
      });
    },
    projectDone: (project, action) => {
      const index = project.findIndex((e) => e.id === action.payload.id);
      project[index].done = true;
    },
  },
});
export const { projectAdded, projectDone } = slice.actions;
export default slice.reducer;

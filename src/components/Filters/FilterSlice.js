// export const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };
// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilter":
//       return { ...state, search: action.payload };
//     case "filters/statusFilter":
//       return { ...state, status: action.payload };
//     case "filters/priorityFilter":
//       return { ...state, priorities: action.payload };

//     default:
//       return state;
//   }
// };

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: { search: "", status: "All", priorities: [] },
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
    statusFilter: (state, action) => {
      state.status = action.payload;
    },
    priorityFilter: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
export const { searchFilter, statusFilter, priorityFilter } =
  filtersSlice.actions;

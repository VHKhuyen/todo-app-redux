// import { legacy_createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from "./reducer";

// const composeWithEnhancer = composeWithDevTools();

// export const store = legacy_createStore(reducer, composeWithEnhancer);
import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../redux/filterSlice";
import { todoListSlice } from "../redux/todoSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;

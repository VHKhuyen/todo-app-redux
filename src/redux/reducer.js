import { combineReducers } from "redux";
import filterReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

const reducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default reducer;

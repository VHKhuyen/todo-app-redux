export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (id) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: id,
  };
};

export const searchFilter = (text) => {
  return {
    type: "filters/searchFilter",
    payload: text,
  };
};

export const statusFilter = (status) => {
  return {
    type: "filters/statusFilter",
    payload: status,
  };
};

export const priorityFilter = (priority) => {
  return {
    type: "filters/priorityFilter",
    payload: priority,
  };
};

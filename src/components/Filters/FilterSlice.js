export const initState = {
  search: "",
  status: "All",
  priorities: [],
};
const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFilter":
      return { ...state, search: action.payload };
    case "filters/statusFilter":
      return { ...state, status: action.payload };
    case "filters/priorityFilter":
      return { ...state, priorities: action.payload };

    default:
      return state;
  }
};

export default filterReducer;

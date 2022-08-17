const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Play soccer", completed: false, priority: "Medium" },
    { id: 2, name: "Learning", completed: true, priority: "High" },
    { id: 3, name: "Rinse", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: 5,
            name: "Learn Footbal",
            completed: false,
            priority: "Medium",
          },
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;

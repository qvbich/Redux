const initState = [
  { id: 1, name: "Play soccer", completed: false, priority: "Medium" },
  { id: 2, name: "Learning", completed: true, priority: "High" },
  { id: 3, name: "Rinse", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoListReducer;

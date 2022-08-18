import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const todoListSlector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSlector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.name.includes(searchText);
    });
  }
);

// export const todoListSlector = (state) => {
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return todoRemaining;
// };
// export const searchTextSelector = (state) => state.filters.search;

let nextTodoId = 0;
// to add an item to state.
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});
// filter for where added todo can go.
export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});
//deleting a todo from the state
export const removeTodo = (id) => {
  type: "REMOVE_TODO", id;
};
// toggling the todo
export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});
// filter for where added todo can go. ALL todos COMPLETED todos ACTIVE todos.
// VisibilityFilter is now going to go to our reducer.
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_REMOVED: "SHOW_REMOVED",
};

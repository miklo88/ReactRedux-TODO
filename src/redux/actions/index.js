let nextTodoId = 0;
// to add an item to state.
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});
// remove todo
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});
// filter for where added todo can go.
export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});
// toggling the todo
export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});
// filter for where added todo can go. ALL todos COMPLETED todos ACTIVE todos.
// VisibilityFilter is now going to go to our reducer.
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  DELETED_TODO: "DELETE_TODO",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

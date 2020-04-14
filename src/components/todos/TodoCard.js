import { connect } from "react-redux";
import { toggleTodo } from "../../redux/actions";
import TodoList from "./TodoList";
import { VisibilityFilters } from "../../redux/actions";
///Card rendering TODOS to the client.
const TodoCard = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    //show removed todos? another render place?
    case VisibilityFilters.SHOW_REMOVED:
      return todos.filter((t) => !t.remove);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: TodoCard(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

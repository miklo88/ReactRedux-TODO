import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";
import "./todo-list.scss";
// List of TODOS component.
const TodoList = ({ todos, toggleTodo }) => (
  <div className='todoList-container'>
    <p className='todo-container-label'>Patchy's Todo List</p>

    <ul className='todos-list'>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;

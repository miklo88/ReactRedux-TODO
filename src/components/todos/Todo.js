import React from "react";
import PropTypes from "prop-types";
import DeleteTodo from "./delete-todo";
//styles
import "./todo.scss";

// the TODO where it renders a single todo.
const Todo = ({ id, onClick, completed, text }) => (
  <div className='todo-container'>
    <li
      className='todo'
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {text}
      <DeleteTodo id={id} />
    </li>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Todo;

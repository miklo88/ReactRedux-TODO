import React from "react";
import PropTypes from "prop-types";
import "./Todo.scss";
// the TODO where it renders a single todo.
const Todo = ({ onClick, completed, text }) => (
  <div className='todo-container'>
    <li
      className='todo'
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {text}
      <button className='delete-todo-btn'>Remove</button>
    </li>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

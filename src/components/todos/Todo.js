import React from "react";
import PropTypes from "prop-types";
// A TODO component.
const Todo = ({ onClick, completed, text }) => (
  <li
    className='todo'
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

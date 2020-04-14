import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../redux/actions/";
import "./Todo.scss";

let DeleteTodo = ({ id, dispatch }) => {
  return (
    <div>
      <button
        className='deleteTodo-button'
        onClick={(e) => {
          e.preventDefault();
          console.log(dispatch(deleteTodo(id)));
          dispatch(deleteTodo(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default connect()(DeleteTodo);

import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../redux/actions/action-creator";
//styles
import "./delete-todo.scss";

const alertMessage = () => {
  alert("sure about that?");
};

let DeleteTodo = ({ id, dispatch }) => {
  return (
    <div>
      <button
        className='deleteTodo-button'
        onClick={(e) => {
          e.preventDefault();
          console.log(dispatch(deleteTodo(id)));
          dispatch(deleteTodo(id));
          alertMessage();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default connect()(DeleteTodo);

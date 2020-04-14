import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../redux/actions/";

let RemoveTodo = ({ dispatch }) => {
  return (
    <div>
      <button
        className='deleteTodo-button'
        onCLick={(e) => {
          e.preventDefault();
          console.log(dispatch(deleteTodo()));
        }}
        type='submit'
      >
        Done?
      </button>
    </div>
  );
};

RemoveTodo = connect()(RemoveTodo);

export default RemoveTodo;

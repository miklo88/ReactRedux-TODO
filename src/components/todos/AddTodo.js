import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions/ActionCreator";
import "./AddTodo.scss";
// ADD TODO component.
const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className='addTodo-container'>
      <form
        className='addTodo-form'
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          className='addTodo-input'
          placeholder='Add Todo'
          ref={(node) => (input = node)}
        />
        <button className='addTodo-button' type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);

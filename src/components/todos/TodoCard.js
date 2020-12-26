import React from "react";
// import './Todo.scss'

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "instate",
      description: "INSTATE",
      comment: "etatsni"
    };
  }
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-form'>
          <input className='input-field' type='text' />
          <p className='input-text'>{this.state.title}</p>
          <p className='input-text'>{this.state.description}</p>
          <p className='input-text'>{this.state.comment}</p>
          <input className='input-field' type='text' />
          <p className='input-text'>{this.state.title}</p>
          <p className='input-text'>{this.state.description}</p>
          <p className='input-text'>{this.state.comment}</p>
          <input className='input-field' type='text' />
          <p className='input-text'>{this.state.title}</p>
          <p className='input-text'>{this.state.description}</p>
          <p className='input-text'>{this.state.comment}</p>
          <input className='input-field' type='text' />
          <p className='input-text'>{this.state.title}</p>
          <p className='input-text'>{this.state.description}</p>
          <p className='input-text'>{this.state.comment}</p>
          {/* <input
            onClick={() => this.setTodo({})}
            className='todo-submit'
            type='submit'
          >
            Submit
          </input> */}
        </div>
      </div>
    );
  }
}
export default Todo;

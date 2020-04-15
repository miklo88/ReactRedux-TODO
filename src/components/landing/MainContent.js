import React from "react";
import patchy from "../../Imgs/Exclude.png";
import FilterLink from "../Todos/FilterLink";
import { VisibilityFilters } from "../../Redux/Actions/ActionCreator";
import AddTodo from "../Todos/AddTodo";
import TodoCard from "../Todos/TodoCard";
import "./MainContent.scss";

export default function MainContent() {
  return (
    <div className='main-content-body'>
      <img src={patchy} className='Patchy-logo' alt='patchy-logo' />
      <AddTodo />
      <div className='todo-category-container'>
        <h1 className='mainContent-h1'>Show:</h1>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
        <TodoCard />
      </div>
    </div>
  );
}

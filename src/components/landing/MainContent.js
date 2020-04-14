import React from "react";
import patchy from "../../imgs/Exclude.png";
import FilterLink from "../todos/FilterLink";
import { VisibilityFilters } from "../../redux/actions";
import AddTodo from "../todos/AddTodo";
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
      </div>
    </div>
  );
}

import React from "react";
import patchy from "../../imgs/exclude.png";
import FilterLink from "../todos/filter-link";
import { VisibilityFilters } from "../../redux/actions/action-creator";
import AddTodo from "../todos/add-todo";
import TodoCard from "../todos/todo-card";
import "./main-content.scss";

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

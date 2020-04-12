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
        <h1>Show:</h1>
        <FilterLink className='filter-link' filter={VisibilityFilters.SHOW_ALL}>
          <h1>All</h1>
        </FilterLink>
        <FilterLink
          className='filter-link'
          filter={VisibilityFilters.SHOW_ACTIVE}
        >
          <h1> Active</h1>
        </FilterLink>
        <FilterLink
          className='filter-link'
          filter={VisibilityFilters.SHOW_COMPLETED}
        >
          <h1> Completed</h1>
        </FilterLink>
      </div>
    </div>
  );
}

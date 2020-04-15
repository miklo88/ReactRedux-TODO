import React from "react";
import patchy from "../../imgs/exclude.png";
import "./nav.scss";

export default function Nav() {
  return (
    <div className='nav-container'>
      <img src={patchy} className='patchy-nav' alt='patchy-nav' />
      <h1 className='nav-title'>Patchy's To-Do List</h1>
    </div>
  );
}

import React from "react";
import patchy from "../../Imgs/Exclude.png";
import "./Nav.scss";

export default function Nav() {
  return (
    <div className='nav-container'>
      <img src={patchy} className='patchy-nav' alt='patchy-nav' />
      <h1 className='nav-title'>Patchy's To-Do List</h1>
    </div>
  );
}

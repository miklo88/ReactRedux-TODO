import React from "react";
import patchy from "../imgs/SubtractPatchy.png";
import "./MainContent.scss";

export default function MainContent() {
  return (
    <div className='main-content-body'>
      <h1>HI</h1>
      <img src={patchy} className='Patchy-logo' alt='' />
    </div>
  );
}

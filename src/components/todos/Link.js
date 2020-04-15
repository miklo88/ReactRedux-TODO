import React from "react";
import PropTypes from "prop-types";
import "./link.scss";
// disables ACTIVE TODO's.
const Link = ({ active, children, onClick }) => (
  <button className='link-btn' onClick={onClick} disables={active}>
    <p className='link-p'>{children}</p>
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;

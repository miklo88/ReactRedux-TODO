import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => (
  <button onClick={onClick} disables={active}>
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;

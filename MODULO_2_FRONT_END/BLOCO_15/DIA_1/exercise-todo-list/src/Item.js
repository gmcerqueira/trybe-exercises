import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  const { index, content, click, remove, selected } = props;
  return (
    <li
      className="Item"
      id={index}
      onClick={click}
      onDoubleClick={remove}
      style={selected ? { color: "red" } : { color: "" }}
    >
      {content}
    </li>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
};

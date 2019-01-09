import React from "react";
import PropTypes from "prop-types";

const TodoItem = props => (
  <li>
    <div className="view">
      <label>{props.todo.text}</label>
      <button
        className="destroy"
        onClick={() => props.removeTodo(props.todo.id)}
      />
    </div>
  </li>
);

TodoItem.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string
  }).isRequired
};

export default TodoItem;

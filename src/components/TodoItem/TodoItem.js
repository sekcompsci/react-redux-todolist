import React from "react";
import PropTypes from "prop-types";
import Styles from './TodoItem.module.scss';

const TodoItem = props => (
  <li>
    <div className={Styles.view}>
      <label>{props.todo.text}</label>
      <button
        className={Styles.destroy}
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

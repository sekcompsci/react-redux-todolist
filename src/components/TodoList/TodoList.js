import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../../containers/TodoItem";

const TodoList = props => (
    <section className="main">
        <ul className="todo-list">
            {props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    </section>
);

TodoList.defaultProps = {
    todos: []
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default TodoList;

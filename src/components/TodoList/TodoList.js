import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../../containers/TodoItem';
import Styles from './TodoList.module.scss';

const TodoList = props => (
    <section className={Styles.main}>
        <ul className={Styles.todoList}>
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

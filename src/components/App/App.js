import React from 'react';
import Header from '../Header';
import TodoList from '../../containers/TodoListContainer';
import Styles from './App.module.scss';

const App = () => (
  <div className={Styles.todoapp}>
    <Header />
    <TodoList />
  </div>
);

export default App;

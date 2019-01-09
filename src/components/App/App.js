import React from 'react';
import Header from '../Header';
import TodoList from '../../containers/TodoListContainer';

const App = () => (
  <div className="todoapp">
    <Header />
    <TodoList />
  </div>
);

export default App;

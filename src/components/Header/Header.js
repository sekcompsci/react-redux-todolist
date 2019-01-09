import React from 'react';
import TodoTextInput from '../../containers/TextInputContainer';

const Header = () => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput />
  </header>
)

export default Header
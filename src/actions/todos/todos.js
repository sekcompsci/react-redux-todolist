export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (id, text) => {
  return { type: ADD_TODO, id, text };
};

export const removeTodo = id => {
  return { type: REMOVE_TODO, id };
};
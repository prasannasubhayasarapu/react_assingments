// Todos.jsx
import React from 'react';
import { TodoProvider } from './TodoContext';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todos = () => {
  return (
    <TodoProvider>
      <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
        <h1>My Todos</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default Todos;
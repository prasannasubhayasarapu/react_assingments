// TodoList.jsx
import React from 'react'
import { useTodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useTodoContext();

  if (todos.length === 0) {
    return <p>No todos yet. Add one above!</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
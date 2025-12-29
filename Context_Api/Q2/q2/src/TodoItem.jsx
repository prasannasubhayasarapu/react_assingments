// TodoItem.jsx
import React from 'react';
import { useTodoContext } from './TodoContext';

const TodoItem = ({ id }) => {
  const { todos, deleteTodo } = useTodoContext();

  const todo = todos.find((t) => t.id === id);
  if (!todo) return null;

  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', border: '1px solid #ccc', margin: '4px 0' }}>
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(id)} style={{ color: 'red' }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
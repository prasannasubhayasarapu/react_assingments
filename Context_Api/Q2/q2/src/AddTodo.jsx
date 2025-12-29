// AddTodo.jsx
import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
        style={{ padding: '8px', marginRight: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
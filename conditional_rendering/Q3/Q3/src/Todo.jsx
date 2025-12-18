// TodosList.js
import React, { useState, useEffect } from 'react';
import Todocard from './Todocard';

function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let isMounted = true; // To prevent state update if component unmounted

    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        if (isMounted) {
          setTodos(data.slice(0, 15));
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();

    // Cleanup function
    return () => {
      isMounted = false;
      alert('cleanup worked');
    };
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <Todocard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodosList;
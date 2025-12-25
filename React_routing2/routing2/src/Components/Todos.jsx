import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Todos() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        setTodos(data.slice(0, 10));
      } catch (err) {
        console.error('Failed to fetch todos');
      }
    };
    fetchTodos();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login', { replace: true });
  };

  return (
    <div className="page">
      <h2>Todos</h2>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
      <div className="todos-list">
        {todos.map((todo) => (
          <Link
            key={todo.id}
            to={`/todos/${todo.id}`}
            className="todo-item"
          >
            <span>{todo.title}</span>
            <span className={todo.completed ? 'completed' : 'not-completed'}>
              {todo.completed ? '✓ Completed' : '○ Not Completed'}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Todos;
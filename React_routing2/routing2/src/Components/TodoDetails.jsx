import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TodoDetails() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`
        );
        if (!res.ok) throw new Error('Todo not found');
        const data = await res.json();
        setTodo(data);
      } catch (err) {
        console.error('Failed to fetch todo');
        navigate('/todos', { replace: true });
      }
    };
    fetchTodo();
  }, [todoId, navigate]);

  if (!todo) return <div className="page">Loading...</div>;

  return (
    <div className="page">
      <h2>Todo Details</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p>
        <strong>Status:</strong>{' '}
        {todo.completed ? 'Completed' : 'Not Completed'}
      </p>
      <button onClick={() => navigate('/todos')}>← Back to Todos</button>
    </div>
  );
}

export default TodoDetails;
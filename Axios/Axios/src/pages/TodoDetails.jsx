import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodoById } from '../api/todoService';
import { Link } from 'react-router-dom';
const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await getTodoById(id);
        setTodo(data);
      } catch (error) {
        console.error('Error fetching todo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  if (loading) return <div>Loading todo details...</div>;
  if (!todo) return <div>Todo not found</div>;

  return (
    <div>
      <h1>Todo Details</h1>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Status:</strong> {todo.completed ? 'Completed ✅' : 'Pending ⭕'}</p>
      <Link to="/">← Back to Todos</Link>
    </div>
  );
};

export default TodoDetails;
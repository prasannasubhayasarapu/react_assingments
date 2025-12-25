import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Todos from './Components/Todos';
import TodoDetails from './Components/TodoDetails';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <Todos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todos/:todoId"
          element={
            <ProtectedRoute>
              <TodoDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
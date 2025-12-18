// App.js
import React, { useState } from 'react';
import Todo from './Todo';

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <h1>Todo App</h1>
      {showTodos && <Todo />}
      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>
    </div>
  );
}

export default App;
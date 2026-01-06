// App.js
import React, { useState, lazy, Suspense } from 'react';

// Lazy load the heavy component
const LazyHeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20:px' }}>
      <h1>React.memo + Lazy Loading Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment Counter
        </button>
      </div>

      {/* Wrap lazy component in Suspense */}
      <Suspense fallback={<div>Loading heavy component...</div>}>
        <LazyHeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
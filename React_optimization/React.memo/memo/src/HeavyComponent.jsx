// HeavyComponent.jsx
import React from 'react';

// Actual heavy component — wrapped with React.memo
const HeavyComponentInner = React.memo(() => {
  console.log('HeavyComponent rendered!');

  // Simulate expensive computation
  const expensiveValue = Array.from({ length: 10000 }, (_, i) => i * 2);

  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', marginTop: '20px' }}>
      <h2>Heavy Component (Lazy Loaded & Memoized)</h2>
      <p>This component simulates expensive rendering with 10,000 calculations.</p>
      <p>Value preview: [{expensiveValue.slice(0, 5).join(', ')}...]</p>
    </div>
  );
});

export default HeavyComponentInner;
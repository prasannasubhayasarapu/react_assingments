import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [results, setResults] = useState([]);

  const handleNum1Change = (e) => {
    const value = e.target.value;
    // Allow empty string or valid numbers (including negative and decimals)
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setNum1(value);
    }
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setNum2(value);
    }
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handlePerformAction = () => {
    // Validate inputs
    if (num1 === '' || num2 === '') {
      alert('Please enter both numbers');
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert('Please enter valid numbers');
      return;
    }

    let result;
    switch (operation) {
      case 'add':
        result = n1 + n2;
        break;
      case 'subtract':
        result = n1 - n2;
        break;
      case 'multiply':
        result = n1 * n2;
        break;
      default:
        result = 0;
    }

    // Append new result to existing results
    setResults(prev => [...prev, result]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Calculator</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter first number"
          style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter second number"
          style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <select 
          value={operation} 
          onChange={handleOperationChange}
          style={{ width: '100%', padding: '8px' }}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
        </select>
      </div>
      
      <button 
        onClick={handlePerformAction}
        style={{ 
          width: '100%', 
          padding: '10px', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Perform Action
      </button>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Results:</h3>
        {results.length === 0 ? (
          <p>No results yet</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {results.map((res, index) => (
              <li 
                key={index} 
                style={{ 
                  padding: '8px', 
                  backgroundColor: '#f0f0f0', 
                  margin: '5px 0',
                  borderRadius: '4px'
                }}
              >
                Result {index + 1}: {res}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calculator;
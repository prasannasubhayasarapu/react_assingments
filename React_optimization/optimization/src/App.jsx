import React, { useState, useMemo, useCallback } from 'react';

// ProductList component
const ProductList = ({ products, onProductSelect }) => {
  console.log('ProductList rendered'); // For demonstration purposes

  return (
    <div>
      <h2>Products:</h2>
      {products.map(product => (
        <div key={product.id} onClick={() => onProductSelect(product)}>
          {product.name} - ${product.price}
        </div>
      ))}
    </div>
  );
};

// Main App component
const App = () => {
  const [counter, setCounter] = useState(0);
  
  // Simulate large product array (in real app, this might come from props or API)
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 75 },
    // ... potentially hundreds more products
  ];

  // ✅ OPTIMIZATION 1: useMemo for total price calculation
  // Only recalculates when products array changes (not on counter updates)
  const total = useMemo(() => {
    console.log('Calculating total price...'); // For demonstration
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]); // Dependency array ensures recalculation only when products change

  // ✅ OPTIMIZATION 2: useCallback for product selection handler
  // Maintains same function reference between renders (unless dependencies change)
  const handleProductSelect = useCallback((product) => {
    console.log('Selected product:', product.name);
    // Handle product selection logic here
  }, []); // Empty dependency array since it doesn't depend on any reactive values

  return (
    <div>
      <h1>Product Store</h1>
      
      {/* Total price display - won't recalculate on counter updates */}
      <div>Total Price: ${total}</div>
      
      {/* Counter that doesn't affect product calculations */}
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setcounter(counter + 1)}>
          Increment Counter
        </button>
      </div>
      
      {/* ProductList won't re-render on counter updates due to memoized handler */}
      <ProductList 
        products={products} 
        onProductSelect={handleProductSelect} 
      />
    </div>
  );
};

export default App;

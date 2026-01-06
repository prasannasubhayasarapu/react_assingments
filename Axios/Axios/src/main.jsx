// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Create root container
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
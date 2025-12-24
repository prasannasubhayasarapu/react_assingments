import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



// 2. Import your Page components
import Home from './Components/Home.jsx';
import AboutUs from './Components/About.jsx';
import Todos from './Components/Todos.jsx';
import NotFound from './Components/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* The Navbar stays visible on every page */}

      <div className="container">
        <Routes>
          {/* Route for /home */}
          <Route path="/home" element={<Home />} />

          {/* Route for /aboutus */}
          <Route path="/aboutus" element={<AboutUs />} />

          {/* Route for /todos (where the data fetching happens) */}
          <Route path="/todos" element={<Todos />} />

          {/* 404 Route: This must be the LAST route in the list */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
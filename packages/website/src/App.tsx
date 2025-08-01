// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Components/Pages/Auth/Inicio';
import Productos from './Components/Pages/Auth/Productos';
import Paginas from './Components/Pages/Auth/Paginas';
import Usuarios from './Components/Pages/Auth/Usuarios';
import Navbar from './Components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}> {/* Simple spacing for content */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/paginas" element={<Paginas />} />
          <Route path="/usuarios" element={<Usuarios />} />
          {/* Optionally, add a 404 Not Found page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

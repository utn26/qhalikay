// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Productos from './Pages/Productos';
import Paginas from './Pages/Paginas';
import Usuarios from './Pages/Usuarios';
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
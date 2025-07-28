// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav style={{ background: '#333', padding: '10px 20px', display: 'flex', justifyContent: 'space-around' }}>
            <Link to="/inicio" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Inicio</Link>
            <Link to="/productos" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Productos</Link>
            <Link to="/paginas" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Páginas</Link>
            <Link to="/usuarios" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Usuarios</Link>
        </nav>
    );
};

export default Navbar;
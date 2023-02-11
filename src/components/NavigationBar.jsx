import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/acerca">Acerca de</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
};

export default NavigationBar;

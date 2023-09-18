import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';



function NavBar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to={'/'}><button className="nav-button">INICIO</button></Link>
        <Link to={'/produtos'}><button className="nav-button">PRODUTOS</button></Link>
        {/* <Link to={'/carrinho'}><button className="nav-button">CARRINHO</button></Link> */}
      </div>
    </header>
  );
}

export default NavBar;

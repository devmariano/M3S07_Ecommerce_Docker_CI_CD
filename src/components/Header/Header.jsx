import React from 'react';
import SearchBar from '../searchBar/searchBar';
import logo from '../../images/logo_megaoferta.png';
import './Header.css';
import CartButton from '../CartButton/CartButton';
import NavBar from '../NavBar/navBar';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isCartOrCheckoutRoute = location.pathname === '/carrinho' || location.pathname === '/checkout';
  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <Link to={'/'}><img src={logo} alt="Logotipo" /></Link>
        </div>
        {!isCartOrCheckoutRoute && !isHome &&  <SearchBar/>}
        <div className="cart-icon">
          {!isCartOrCheckoutRoute && <CartButton/>}
        </div>
      </div>
      <NavBar/>
    </header>
  );
}

export default Header;

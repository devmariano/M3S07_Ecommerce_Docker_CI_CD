import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import { useLocation } from 'react-router-dom';

function Provider( {children} ) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, item) => {
      return item.price * item.quantity + acc;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  useEffect(() => {
    const newTotalItens = cartItems.reduce((acc, item) => {
      return item.quantity + acc;
    }, 0);
    setTotalItems(newTotalItens);
  }, [cartItems]);

  useEffect(() => {
    setIsCartVisible(false);
  }, [location]);


  const value= {
    products, 
    setProducts,
    loading, 
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible, 
    setIsCartVisible,
    totalPrice, 
    setTotalPrice,
    totalItems
  };

  return ( 
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;

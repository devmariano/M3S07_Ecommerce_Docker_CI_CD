import React from 'react';
import Products from '../components/Products/Products';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';


function PageProducts() {
  return (
    <>
      <Header />
      <Products/>
      <Cart />
      <Footer />
    </>
  );
}



export default PageProducts;

import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import Home from '../components/Home/Home';


function PageHome () {
  return (
    <div>
      <Header />
      <Home/>
      <Cart />
      <Footer />
    </div>
  );
}



export default PageHome;

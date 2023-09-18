import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import error from '../images/error404.jpg';
import './pageNotFound.css';



function PageNotFound() {
  return (
    <div>
      <Header />
      <div className="not-found-container">
        <p className="not-found-text">Ops! Página não encontrada.</p>
        <img
          src={error}
          alt="404 Not Found"
          className="not-found-image"
        />
        <p className="not-found-suggestion">Que tal explorar outras páginas?</p>
      </div>
      <Footer />
    </div>
  );
}



export default PageNotFound;

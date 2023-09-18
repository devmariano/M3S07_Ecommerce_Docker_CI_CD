import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHome from './pages/pageHome';
import PageProducts from './pages/pageProducts';
import Provider from './context/Provider';
import PageNotFound from './pages/pageNotFound';
import PageCart from './pages/pageCart';
import PageCheckout from './pages/pageCheckout';



function App() {
  return (  

    <Router>
      <Provider>
        <Routes>
          <Route path="/" element={<PageHome/>}/>
          <Route path="/produtos" element={<PageProducts/>} />
          <Route path="/carrinho" element={<PageCart/>} />
          <Route path="/checkout" element={<PageCheckout/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Provider>
    </Router>
   
  );
}

export default App;

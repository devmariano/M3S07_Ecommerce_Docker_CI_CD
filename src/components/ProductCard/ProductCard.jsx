import React, { useContext } from 'react';
import './ProductCard.css';
import { BsCartPlusFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import { useLocation } from 'react-router-dom';

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const location = useLocation();

  const isHome = location.pathname === '/';

  const handleAddCart = () => {
    const existingItem = cartItems.find((item) => item.id === data.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
  };

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        { isHome &&  <h2 className="card__price_promo">de: {formatCurrency(price*1.5, 'BRL')}</h2>}
        { isHome &&  <h2 className="card__price">por: {formatCurrency(price, 'BRL')}</h2>}
        { !isHome &&  <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>}
        {/* <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2> */}
        <h2 className="card__title">{title}</h2>
      </div>

      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

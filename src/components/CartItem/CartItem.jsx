import React, { useContext } from 'react';
import propTypes from 'prop-types';

import {BsFillCartDashFill} from 'react-icons/bs';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem( {data}) {

  const {cartItems, setCartItems} = useContext(AppContext);

  const {id, thumbnail, title, price , quantity } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };


  return ( 
    <section className="cart-item">
      <img 
        src={thumbnail} 
        alt="imagem do produto"
        className="cart-item-image" 
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>
        <div className="cart-item-details">

          <div className="cart-item-quantity-controls">
            <button className="button__quantity" onClick={handleDecreaseQuantity}><AiOutlineLeft/></button>
            <span className="cart-item-quantity"> {quantity} </span>
            <button className="button__quantity" onClick={handleIncreaseQuantity}><AiOutlineRight/></button>
          </div>

          {/* <span className="cart-item-quantity">{quantity} {quantity === 1 ? 'item' : 'itens'}</span> */}
          <span className="cart-item-totalPrice">{formatCurrency(price * quantity, 'BRL')}</span>
        </div>
        <button 
          type="button" 
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <BsFillCartDashFill/>
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;

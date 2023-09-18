import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import './CartPage.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';
import { BsCart2, BsCreditCard, BsFillCheckCircleFill, BsArrowRight } from 'react-icons/bs';



function CartPage() {

  const { cartItems, totalPrice } = useContext(AppContext);

  return (

    <div>
      <span className="cart-info container">
        <span className="cart-info-detail"><BsCart2 /> Carrinho</span>
        <span><BsArrowRight /></span>
        <span><BsCreditCard /> Pagamento</span>
        <span><BsArrowRight /></span>
        <span><BsFillCheckCircleFill /> Concluído</span>
      </span>
      <section className="cart-page container">
        <div className="cart-box-list">
          <span className="cart-resume-title">RESUMO DO CARRINHO</span>
          {cartItems.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <div className="cart-resume-list">
              {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
            </div>
          )
          }

        </div>
        <div className="cart-box-action">
          <div className="cart-resume-title">TOTAL DA COMPRA</div>
          <div className="cart-resume-price">{formatCurrency(totalPrice, 'BRL')}</div>
          <div className="cart_page_buttons">
            <Link to={'/produtos'} className="return-button">CONTINUAR COMPRANDO</Link>
            {cartItems.length === 0 ? (
              <p> </p>
            ) : (
              <Link to={'/checkout'} className="checkout-button">IR PARA O CHECKOUT</Link>
            )}
          </div>
        </div>
      </section>
    </div>

  );
}

export default CartPage;

import AppContext from '../../context/AppContext';
import './Checkout.css';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';
import { BsCart2, BsCreditCard, BsFillCheckCircleFill, BsArrowRight } from 'react-icons/bs';
import { FaCcVisa, FaCcMastercard, FaBarcode } from 'react-icons/fa';
import {MdOutlinePix} from 'react-icons/md';

function Checkout() {
  const { cartItems, totalPrice, totalItems, setCartItems } = useContext(AppContext);

  const [payment, setPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(''); 

  const paymetods = [
    { type: 'Visa', name: 'VISA', icon: <div className={`icon ${selectedPayment === 'Visa' ? 'selected' : ''}`}><FaCcVisa /></div> },
    { type: 'Mastercard', name: 'MASTERCARD', icon: <div className={`icon ${selectedPayment === 'Mastercard' ? 'selected' : ''}`}><FaCcMastercard /></div> },
    { type: 'Pix', name: 'PIX', icon: <div className={`icon ${selectedPayment === 'Pix' ? 'selected' : ''}`}><MdOutlinePix /></div> },
    { type: 'Boleto', name: 'BOLETO', icon: <div className={`icon ${selectedPayment === 'Boleto' ? 'selected' : ''}`}><FaBarcode /></div> }
  ];

  const handlePaymentChange = (type) => {
    setSelectedPayment(type);
  };

  const handlePay = () => {
    setPayment(true);
  };

  useEffect(() => {
    if (payment) {
      setCartItems([]);
    }
  }, [payment]);

  return (

    <div>
      <span className="checkout-info container">
        <span className="checkout-info-detail"><BsCart2 /> Carrinho</span>
        <span className="checkout-info-detail"><BsArrowRight /></span>
        <span className="checkout-info-detail" ><BsCreditCard /> Pagamento</span>
        <span className={`${payment && 'checkout-info-detail'}`}><BsArrowRight /></span>
        <span className={`${payment && 'checkout-info-detail'}`}><BsFillCheckCircleFill /> Concluído</span>
      </span>
      <section className="checkout-page container">
        <div className="checkout-box-list">
          <span className="checkout-resume-title">
            {payment ? 'PAGAMENTO REALIZADO COM SUCESSO' : 'COMO VOCÊ PREFERE PAGAR?'}
          </span>
          {payment ? (
            <>
              <span className="confirm-payment">Seu pedido foi criado com numero #108AB4202022</span>
              <span>Obrigado pela sua compra!</span>
            </>
          ) : (
            <div className="form-checkout">
              {cartItems.length > 0 && paymetods.map((paymetod) => (
                <div
                  key={paymetod.type}
                  className={`checkout-radio ${selectedPayment === paymetod.type ? 'selected' : ''}`}
                  onClick={() => handlePaymentChange(paymetod.type)}
                >
                  <div className={`select-metod ${selectedPayment === paymetod.type ? 'selected' : ''}`}>
                    {paymetod.icon} 
                    <span className="checkout-pay-tittle">{paymetod.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
        {payment ? (
          <div className="checkout-box-action">
            <Link to={'/PRODUTOS'} className="return-button">VOLTAR A LOJA</Link>
          </div>
        ) : (
          <div className="checkout-box-action">
          
            <div className="checkout-resume-itens">Quantidade: {totalItems} Itens</div>
            <div className="checkout-resume-title">VALOR TOTAL</div>
            <div className="checkout-resume-price">{formatCurrency(totalPrice, 'BRL')}</div>
            <div className="checkout_page_buttons">
              <Link to={'/carrinho'} className="return-button">VOLTAR AO CARRINHO</Link>
              {cartItems.length === 0 || selectedPayment==='' ? (
                <p> </p>
              ) : (
                <Link to={'/checkout'} className="checkout-button" onClick={handlePay}>REALIZAR PAGAMENTO</Link>
              )}
            </div>
          </div>
        )}
      </section>
    </div>

  );
}

export default Checkout;

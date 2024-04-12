import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import "./cart.css";
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [showPaymentInfo, setShowPaymentInfo] = useState(false); // Estado para controlar la visibilidad de la información de pago

  return (
    <div className='cart'>
      <div>
        <h1>Tu carrito</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
          return null; // Asegúrate de devolver null si no hay elementos para evitar un warning
        })}
      </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
          <p>Total del carrito *IVA incluido: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Seguir comprando</button>
          <button onClick={() => navigate("/Payment")}>Proceder al pago</button>

        </div>
      ) : (
        <div className='goBack'>
          <h1>Tu carrito está vacío</h1>
          <button onClick={() => navigate('/')}>Ir a la tienda</button>
        </div>
      )}
      {/* Mostrar información de pago si showPaymentInfo es true */}
    </div>
  );
};
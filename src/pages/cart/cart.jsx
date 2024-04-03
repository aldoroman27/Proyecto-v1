import React, { useContext } from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import "./cart.css";

import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1> Tu carrito</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) =>{
          if (cartItems[product.id] !== 0){
            return <CartItem data={product}/>;
          }
        })}
      </div>
    {totalAmount > 0 ? (
      <div className='checkout'>
        <p>Subtotal del carrito *IVA incluido: ${totalAmount}</p>
        <button onClick={() => navigate("/")}>Seguir comprando</button>
        <button>Proceder al pago</button>
      </div>
    ) : (
      <div className='goBack'>
      <h1> Tu carrito está vacío</h1>
      <button onClick={() => navigate("/")}> Ir a la tienda </button>
      </div>
    )}
    </div>
  );
};

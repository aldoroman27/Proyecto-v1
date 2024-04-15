import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom';

export const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const navigate = useNavigate();

    const cartItemAmount = cartItems[id];   
  return(
    <div className='product'>
        <img src={productImage}/>
        <div className='description'>
            <p> 
                <b>{productName}</b> 
            </p>
            <p>
                ${price}
            </p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
             Añadir Al Carrito {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  );
};

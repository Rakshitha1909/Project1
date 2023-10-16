//Cart.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart)

  return (
    <div>
      <h2>Shopping Cart</h2>
        {cart.map((item) => (
    <div key={item.id}>
    <div>{item.title} - ${item.price}</div>
    <button onClick={() => dispatch(removeFromCart(item))}>Remove from Cart</button> 
  </div> 
 ))} 

    </div>
);



 };

export default Cart;

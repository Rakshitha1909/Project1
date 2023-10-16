// Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartActions';

const Cart = () => {
const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart)

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart && cart.map((item) => (
        <div key={item.id}>
          <div>{item.title} - ${item.price}</div>
          <button onClick={() => dispatch(removeFromCart(item))}>Remove from Cart</button> 
        </div>
  ))}
    </div>
  );
};

export default Cart;


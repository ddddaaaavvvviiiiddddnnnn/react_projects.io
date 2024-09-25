import React from 'react';

const Cart = ({ totalItems, totalPrice }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;

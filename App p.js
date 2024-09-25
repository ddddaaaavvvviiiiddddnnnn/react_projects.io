import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';


const App = () => {
  // Product data
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
  ];

  // manage cart
  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Calculate total price and total items
  const totalItems = cart.length;
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h1>Simple Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart totalItems={totalItems} totalPrice={totalPrice} />
    </div>
  );
};

export default App;

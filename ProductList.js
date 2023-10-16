//ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setTotal(total + product.price);
  };

  return (
    <>
      <div className='product-card'>
        <h2>Product List</h2>
        {products.map((product) => (
          <div key={product.id} className='prod'>
            <div>{product.title} - ${product.price}</div>
            <div>{product.description}</div>
            <p>{product.category}</p>
            <img src={product.image} alt={product.title} />
            <p>
              {product.rating.rate} - {product.rating.count} reviews
            </p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          
          </div>
        ))}
      </div>
      <div>
        <p>Total Price: ${total}</p>
      </div>
    </>
  );
};

export default ProductList;







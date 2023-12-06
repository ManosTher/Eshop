import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAdd = (productId) => {
    // Add logic for adding product to cart
  };

  const handleQuantityChange = (productId, quantity) => {
    // Add logic for changing product quantity
  };

  const handleDelete = (productId) => {
    // Add logic for deleting product
  };


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
            </div>
            <div className='justify-self-end'>
              <div className="space-x-2">
                <button onClick={() => handleAdd(product.id)} className="bg-blue-500 text-white px-2 py-1 rounded">
                  Add
                </button>
                <button onClick={() => handleQuantityChange(product.id, product.quantity)} className="bg-blue-500 text-white px-2 py-1 rounded">
                  Change Quantity
                </button>
                <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </div>
              <div>
                <p className="text-gray-500">{product.category.category}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
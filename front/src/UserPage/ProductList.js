import React, { useState, useEffect } from "react";
import ProductModal from "./ProductModal";

const ProductList = ({ selectedCategory, searchTerm, onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "http://localhost:8080/api/products";

        // If a category is selected, append it to the URL
        if (selectedCategory) {
          url += `/byCategory/${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        const filteredProducts = data.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory , searchTerm]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    console.log("Products have changed:", products);
  }, [products]);

  return (
    <div className="font-Vacelyn rounded-lg bg-AlbescentWhite overflow-hidden overflow-y-auto my-8">
      <div className="rounded-lg max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href="#" className="group"   onClick={() => handleProductClick(product)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                ></img>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            </a>
          ))}
        </div>
      </div>
      
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onAddToCart={onAddToCart}
        />
      )}

    </div>
  );
};

export default ProductList;

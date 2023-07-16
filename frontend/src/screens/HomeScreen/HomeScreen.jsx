import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import productsData from "../../data/products";

const HomeScreen = () => {
  return (
    <main className="main-screen">
      <div className="container">
        <h2 className="screen-title">Останні надходження</h2>
        <div className="homescreen-products">
          {productsData.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              // imageUrl={product.imageUrl}
              description={product.description}
              price={product.price}
              size={product.size}
              color={product.color}
              countInStock={product.countInStock}
              productId={product._id}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;

import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Получаем адрес сервера из переменной окружения
    const apiUrl = process.env.MONGO_URI;

    // Отправляем запрос к серверу для получения данных о продуктах
    axios
      .get(`${apiUrl/api/products}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="main-screen">
      <div className="container">
        <h2 className="screen-title">Останні надходження</h2>
        <div className="homescreen-products">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product._id}
                // name={product.name}
                // imageUrl={product.imageUrl}
                // description={product.description}
                // price={product.price}
                // size={product.size}
                // color={product.color}
                // countInStock={product.countInStock}
                // productId={product._id}
                product={product} // Передаем данные о продукте в ProductCard через пропс product
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;

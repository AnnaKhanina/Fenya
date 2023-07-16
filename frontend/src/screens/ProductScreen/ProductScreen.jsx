import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { getProductById } from '../../redux/api';

import { IconContext } from 'react-icons';
import '../ProductScreen/ProductScreen.css';
import '../../components/Container/Container.css';
import '../MainScreen/MainScreen.css';
import '../../components/Header/Header.css';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productId = match.params.id;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <main className="main-screen">
      <IconContext.Provider value={{ color: '#060b26' }}>
        <div className="container product-container">
          <div className="productscreen">
            {loading ? (
              <p>Завантаження...</p>
            ) : error ? (
              <p>Помилка: {error}</p>
            ) : product ? ( // Добавлено условие, чтобы проверить наличие продукта перед отображением его деталей
              <div>
                {/* <img src={product.imageUrl} alt={product.name} /> */}
                <h2>{product.name}</h2>
                <p>Опис: {product.description}</p>
                <p>Ціна: {product.price} грн</p>
                <p>Розмір: {product.size}</p>
                <p>Колір: {product.color}</p>
                <p>Кількість: {product.quantity}</p>
                <button onClick={handleAddToCart}>Додадати у кошик</button>
              </div>
            ) : (
              <p>Продукт не знайден</p>
            )}
          </div>
        </div>
      </IconContext.Provider>
    </main>
  );
};

export default ProductScreen;
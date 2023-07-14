import axios from "axios";

// Функция для получения списка продуктов
export const getProducts = async () => {
  try {
    const response = await axios.get("/api/products");
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Функция для добавления товара в корзину
export const addToCart = async (productId, quantity) => {
  try {
    const response = await axios.post("/api/cart", { productId, quantity });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Функция для удаления товара из корзины
export const removeFromCart = async (productId) => {
  try {
    const response = await axios.delete(`/api/cart/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Функция для получения новых поступлений
export const getNewArrivals = async () => {
  try {
    const response = await axios.get("/api/new-arrivals");
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
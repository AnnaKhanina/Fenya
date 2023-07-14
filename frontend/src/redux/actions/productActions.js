import * as actionTypes from '../constants/actionTypes';
import * as api from '../api';

export const getProducts = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_REQUEST });

  try {
    const response = await api.getProducts();
    dispatch({
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

export const addToCart = (productId) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.ADD_TO_CART_REQUEST });

  try {
    const response = await api.getProducts(productId);
    const product = response.data;

    if (product.countInStock === 0) {
      throw new Error('Товар відсутній на складі');
    }

    dispatch({
      type: actionTypes.ADD_TO_CART_SUCCESS,
      payload: product,
    });

    // Сохранение элементов корзины в localStorage
    const { cartItems } = getState().cart;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_TO_CART_FAILURE,
      payload: error.message,
    });
  }
};

//нові надходження
export const fetchNewArrivals = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_NEW_ARRIVALS_REQUEST });

  try {
    const response = await api.getNewArrivals();
    dispatch({
      type: actionTypes.FETCH_NEW_ARRIVALS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_NEW_ARRIVALS_FAILURE,
      payload: error.message,
    });
  }
};
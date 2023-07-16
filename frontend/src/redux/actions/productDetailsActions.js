import * as actionTypes from '../constants/actionTypes';
import * as api from '../api';

export const fetchProducts = (productId) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_REQUEST });

  try {
    const response = await api.getProductById(productId);
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
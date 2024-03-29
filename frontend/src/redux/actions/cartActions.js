import * as actionTypes from '../constants/actionTypes';

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_TO_CART_REQUEST,
    payload: {
      _id: product._id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      size: product.size,
      color: product.color,
      countInStock: product.countInStock,
    },
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: productId,
  });

  // Save updated cart to localStorage
  const { cart } = getState();
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const updateCartItemQuantity = (productId, quantity) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.UPDATE_CART_ITEM_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  });

  // Save updated cart to localStorage
  const { cart } = getState();
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const selectCartItemSize = (productId, size) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SELECT_CART_ITEM_SIZE,
    payload: {
      productId,
      size,
    },
  });

  // Save updated cart to localStorage
  const { cart } = getState();
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const selectCartItemColor = (productId, color) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SELECT_CART_ITEM_COLOR,
    payload: {
      productId,
      color,
    },
  });

  // Save updated cart to localStorage
  const { cart } = getState();
  localStorage.setItem('cart', JSON.stringify(cart));
};
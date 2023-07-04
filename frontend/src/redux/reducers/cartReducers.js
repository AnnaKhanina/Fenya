import * as actionTypes from '../constants/actionTypes';

const initialState = {
  cartItems: [],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      const removedProductId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== removedProductId),
      };

    case actionTypes.UPDATE_CART_ITEM_QUANTITY:
      const { productId, quantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        ),
      };

    case actionTypes.SELECT_CART_ITEM_SIZE:
      const { productId: selectedProductId, size } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === selectedProductId ? { ...item, size } : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducers;


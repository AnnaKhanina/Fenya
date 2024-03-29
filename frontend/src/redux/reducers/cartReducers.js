import * as actionTypes from '../constants/actionTypes';

const initialState = {
  cartItems: [],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART_REQUEST:
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === newItem._id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === newItem._id ? { ...item, quantity: item.quantity + 1 } : item
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
        cartItems: state.cartItems.filter((item) => item._id !== removedProductId),
      };

    case actionTypes.UPDATE_CART_ITEM_QUANTITY:
      const { productId, quantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === productId ? { ...item, quantity } : item
        ),
      };

    case actionTypes.SELECT_CART_ITEM_SIZE:
      const { productId: selectedSizeProductId, size } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === selectedSizeProductId ? { ...item, size } : item
        ),
      };

    case actionTypes.SELECT_CART_ITEM_COLOR:
      const { productId: selectedColorProductId, color } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === selectedColorProductId ? { ...item, color } : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducers;

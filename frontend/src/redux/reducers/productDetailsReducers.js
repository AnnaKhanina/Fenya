import * as actionTypes from '../constants/actionTypes';

const initialState = {
  product: {},
  loading: false,
  error: null,
};

const productDetailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };

    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productDetailsReducers;
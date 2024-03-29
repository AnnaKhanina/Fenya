import * as actionTypes from '../constants/actionTypes';

const initialState = {
  newArrivals: [],
  loading: false,
  error: null,
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEW_ARRIVALS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_NEW_ARRIVALS_SUCCESS:
      return {
        ...state,
        newArrivals: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_NEW_ARRIVALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducers;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducers from './reducers/productReducers';
import cartReducers from './reducers/cartReducers';
import productDetailsReducers from './reducers/productDetailsReducers';

// Проверяем наличие сохраненного состояния в localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const rootReducer = combineReducers({
  products: productReducers,
  productDetails: productDetailsReducers,
  cart: cartReducers,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Подписываемся на изменения состояния и сохраняем его в localStorage
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
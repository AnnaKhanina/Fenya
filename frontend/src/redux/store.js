import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevtools } from "redux-devtools-extension";

const reducer = combineReducers({});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevtools(applyMiddleware(...middleware))
);

export default store;
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import productReducer from './Reducers';

const rootReducer = combineReducers({
  product: productReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;

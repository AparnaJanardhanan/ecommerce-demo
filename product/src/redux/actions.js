import { FETCH_PRODUCTS_SUCCESS, DECREMENT_PRODUCT_COUNT } from './actionTypes'; 

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const decrementProductCount = (productId) => {
  return {
    type: DECREMENT_PRODUCT_COUNT,
    payload: productId,
  };
};

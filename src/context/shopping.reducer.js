import {
    UPDATE_OFFERS,
    UPDATE_CATEGORIES,
    UPDATE_PRODUCTS,
    UPDATE_CART
  } from './types';
  
  const shoppingReducer = (state, action) => {
    switch (action.type) {
      case UPDATE_OFFERS:
        return {
          ...state,
          offers: action.payload
        };
      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: action.payload
        };
      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: action.payload
        };
      case UPDATE_CART: {
        return {
          ...state,
          cart: action.payload
        };
      }
      default:
        return state;
    }
};
  
export default shoppingReducer;
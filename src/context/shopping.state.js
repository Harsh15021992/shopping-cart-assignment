import { useReducer } from 'react';
import ShoppingContext from './shopping.context';
import shoppingReducer from './shopping.reducer';
import getOffers from "./../api/offers.api";
import getProductCategories from "./../api/productCategory.api";
import getProducts from "./../api/products.api";
import {
    UPDATE_OFFERS,
    UPDATE_CATEGORIES,
    UPDATE_PRODUCTS,
    UPDATE_CART
} from "./types";


const ShoppingProvider = props => {
    const initialState = {
        offers: [],
        categories: [],
        products: [],
        cart: []
    };

    const [state, dispatch] = useReducer(shoppingReducer, initialState);
    

    const updateOffers = () => {
        getOffers().then(({ ...res }) => {
            const data = res.data.sort((a, b) => a.order - b.order);
            dispatch({
                type: UPDATE_OFFERS,
                payload: data
            });
        });
    };
    const updateCategories = () => {
        getProductCategories().then(({ ...res }) => {
            const data = res.data.sort((a, b) => a.order - b.order);
            dispatch({
                type: UPDATE_CATEGORIES,
                payload: data
            });
        });
    };
    const updateProducts = () => {
        getProducts().then(({ ...res }) => {
            const data = res.data.sort((a, b) => a.order - b.order);
            dispatch({
                type: UPDATE_PRODUCTS,
                payload: data
            });
          });
    };
    const updateCart = (data) => {
        dispatch({
            type: UPDATE_CART,
            payload: data
        });
    };

  return (
    <ShoppingContext.Provider
      value={{
        offers: state.offers,
        categories: state.categories,
        products: state.products,
        cart: state.cart,
        updateOffers,
        updateCategories,
        updateProducts,
        updateCart
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
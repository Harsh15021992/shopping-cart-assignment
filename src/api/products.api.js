import { get } from "./api";
import { PRODUCTS_URL } from "./api.const.js";

const getProducts = () => {
  return get(PRODUCTS_URL);
};
export default getProducts;

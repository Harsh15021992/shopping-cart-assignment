import { post } from "./api";
import { CART_URL } from "./api.const.js";

const postCartDetails = () => {
  return post(CART_URL);
};
export default postCartDetails;

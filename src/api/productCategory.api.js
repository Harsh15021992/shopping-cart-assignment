import { get } from "./api";
import { CATEGORY_URL } from "./api.const.js";

const getProductCategories = () => {
  return get(CATEGORY_URL);
};
export default getProductCategories;

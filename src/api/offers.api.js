import { get } from "./api";
import { OFFER_URL } from "./api.const.js";

const getOffers = () => {
  return get(OFFER_URL);
};
export default getOffers;

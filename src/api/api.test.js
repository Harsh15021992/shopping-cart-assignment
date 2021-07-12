import axios from "axios";
import { get, post } from "./api";
import { OFFER_URL, CART_URL } from "./api.const.js";

jest.mock("axios");

describe("API test cases", () => {
  it("GET method test", () => {
    const offers = [
      {
        bannerImageUrl: "/static/images/offers/offer1.jpg",
        bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
        isActive: true,
        order: 1,
        id: "5b6c38156cb7d770b7010ccc",
      },
    ];
    const resp = { data: offers };
    axios.get.mockResolvedValue(resp);
    return get(OFFER_URL).then((data) =>
      expect(data).toEqual({ data: offers })
    );
  });
  it("POST method test", () => {
    const cart = [
      {
        name: "Capsicum - Green, 1 kg",
        imageURL: "/static/images/products/fruit-n-veg/capsicum-green.jpg",
        description:
          "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.",
        price: 137,
        stock: 50,
        category: "5b6899953d1a866534f516e2",
        sku: "fnw-capsicum-1",
        id: "5b6c6bdc01a7c38429530886",
        count: 10,
      },
    ];
    const resp = { data: cart };
    axios.post.mockResolvedValue(resp);
    return post(CART_URL, {}).then((data) =>
      expect(data).toEqual({ data: cart })
    );
  });
});

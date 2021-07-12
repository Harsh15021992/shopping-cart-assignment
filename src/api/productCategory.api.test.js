import getProductCategories from "./productCategory.api";
import axios from "axios";
import { get } from "./api";
import { PRODUCTS_URL } from "./api.const.js";

jest.mock("axios");
const testData = [
  {
    responseData: "ResponseValue",
  },
];
const resp = { data: testData };
beforeEach(() => {
  axios.get.mockResolvedValue(resp);
  return get(PRODUCTS_URL);
});

describe("Categories API test", () => {
  it("Categories API function should be truthy", () => {
    expect(getProductCategories()).toBeTruthy();
  });
  it("Categories API function should return Data", async () => {
    let httpResult = null;
    await getProductCategories()
      .then((response) => {
        httpResult = response;
      })
      .catch((e) => {
        httpResult = e;
      });
    expect(httpResult).toStrictEqual({ data: testData });
  });
});

import postCartDetails from "./cart.api";
import axios from "axios";
import { post } from "./api";
import { OFFERS_URL } from "./api.const.js";

jest.mock("axios");
const testData = [
  {
    responseData: "ResponseValue",
  },
];
const resp = { data: testData };
beforeEach(() => {
  axios.post.mockResolvedValue(resp);
  return post(OFFERS_URL);
});

describe("Categories API test", () => {
  it("Categories API function should be truthy", () => {
    expect(postCartDetails()).toBeTruthy();
  });
  it("Categories API function should return Data", async () => {
    let httpResult = null;
    await postCartDetails()
      .then((response) => {
        httpResult = response;
      })
      .catch((e) => {
        httpResult = e;
      });
    expect(httpResult).toStrictEqual({ data: testData });
  });
});

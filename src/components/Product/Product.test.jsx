import React from "react";
import Product from "./Product";
import ShallowRenderer from "react-test-renderer/shallow";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

let realUseContext;
let useContextMock;
let useEffect;
const sampleContextData = {
  offers: [
    {
      bannerImageUrl: "/static/images/offers/offer1.jpg",
      bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
      isActive: true,
      order: 1,
      id: "5b6c38156cb7d770b7010ccc",
    },
  ],
  categories: [
    {
      name: "Fruits & Vegetables",
      key: "fruit-and-veg",
      description: "A variety of fresh fruits and vegetables.",
      enabled: true,
      order: 1,
      imageUrl: "/static/images/category/fruits.png",
      id: "5b6899953d1a866534f516e2",
    },
  ],
  products: [
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
    },
  ],
  cart: [
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
      count: 2,
    },
  ],
  updateOffers: () => {},
  updateCategories: () => {},
  updateProducts: () => {},
  updateCart: () => {},
};
const sampleEmptyContextData = {
  offers: [],
  categories: [],
  products: [],
  cart: [],
  updateOffers: () => {},
  updateCategories: () => {},
  updateProducts: () => {},
  updateCart: () => {},
};

const mockUseEffect = () => {
  useEffect.mockImplementationOnce((f) => f());
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
  useEffect = jest.spyOn(React, "useEffect");
  mockUseEffect();
  mockUseEffect();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});
describe("Product Component Test suit", () => {
  it("Product with all productCategory without any prefetched data", () => {
    useContextMock.mockReturnValue(sampleEmptyContextData);
    const element = new ShallowRenderer().render(
      <Product match={{ params: { productCategory: "all" } }} />
    );
    expect(element).toBeTruthy();
  });

  it("Product with all productCategory", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = new ShallowRenderer().render(
      <Product match={{ params: { productCategory: "all" } }} />
    );
    expect(element).toBeTruthy();
  });

  it("Product with particular productCategory", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(
      <Product
        match={{ params: { productCategory: "5b6899953d1a866534f516e2" } }}
      />
    );
    expect(element).toBeTruthy();
    expect(element).toMatchSnapshot();
  });
});
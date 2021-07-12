import React from "react";
import ProductLayout from "./ProductLayout";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

let realUseContext;
let useContextMock;
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

const sampleContextDataWithDiffProduct = {
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
      name: "Tomato - Local, Organically Grown, 500 gm",
      imageURL: "/static/images/products/fruit-n-veg/tomato.jpg",
      description:
        "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes are free from harmful pesticides and insecticides.",
      price: 12,
      stock: 50,
      category: "5b6899953d1a866534f516e2",
      sku: "fnw-tomatoes-500",
      id: "5b6c6c1801a7c38429530887",
    },
  ],
  cart: [],
  updateOffers: () => {},
  updateCategories: () => {},
  updateProducts: () => {},
  updateCart: () => {},
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});

// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

describe("ProductLayout Component Test suit", () => {
  it("ProductLayout should render and match with snapshot", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(
      <ProductLayout item={sampleContextData.products[0]} />
    );
    expect(element).toBeTruthy();
    expect(element).toMatchSnapshot();
  });
  it("buy now button click test for item already present in cart", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(
      <ProductLayout item={sampleContextData.products[0]} />
    );
    const buyNowButton = element.find(".prod-button-price");
    buyNowButton.simulate("click");
  });
  it("buy now button click test for item not present in cart", () => {
    useContextMock.mockReturnValue(sampleContextDataWithDiffProduct);
    const element = shallow(
      <ProductLayout item={sampleContextData.products[0]} />
    );
    const buyNowButton = element.find(".prod-button-price");
    buyNowButton.simulate("click");
  });
});

import React from "react";
import CartItem from "./CartItem";
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
      count: 10,
    },
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
      count: 15,
    },
  ],
  updateOffers: () => {},
  updateCategories: () => {},
  updateProducts: () => {},
  updateCart: () => {},
};
const sampleContextDatawithSingleCartItem = {
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
      count: 1,
    },
  ],
  updateOffers: () => {},
  updateCategories: () => {},
  updateProducts: () => {},
  updateCart: () => {},
};

const baseProps = {
  item: sampleContextData.cart[0],
  index: 0,
  key: 0,
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

describe("Cart Component test Suit", () => {
  it("CartItem should match with snapshot", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const tree = shallow(<CartItem {...baseProps} />);
    expect(tree).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
  it("decrease item click test", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const tree = shallow(<CartItem {...baseProps} />);
    const decreaseCountButton = tree.find(".decrease-count");
    decreaseCountButton.simulate("click", "decrease");
  });
  it("decrease item click should remove item from cart permanently if count is 1", () => {
    useContextMock.mockReturnValue(sampleContextDatawithSingleCartItem);
    const tree = shallow(<CartItem {...baseProps} />);
    const decreaseCountButton = tree.find(".decrease-count");
    decreaseCountButton.simulate("click", "decrease");
  });
  it("increase item click test", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const tree = shallow(<CartItem {...baseProps} />);
    const increaseCountButton = tree.find(".increase-count");
    increaseCountButton.simulate("click", "increase");
  });
});

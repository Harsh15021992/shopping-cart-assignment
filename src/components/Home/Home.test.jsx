import React from "react";
import Home from "./Home";
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
    {
      name: "Baby Care",
      key: "baby",
      description:
        "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
      enabled: true,
      order: 5,
      imageUrl: "/static/images/category/baby.png",
      id: "5b6899683d1a866534f516e0",
    },
    {
      name: "Seafood",
      key: "seafood",
      description: "Great place to buy fresh seafood.",
      enabled: false,
      order: -1,
      id: "5b68997d3d1a866534f516e1",
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

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const mockUseEffect = () => {
  useEffect.mockImplementationOnce((f) => f());
};

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
  useEffect = jest.spyOn(React, "useEffect");
  mockUseEffect();
});

// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});
describe("Home Component Test Suit", () => {
  it("Home Component should match with snapshot", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(<Home />);
    expect(element).toBeTruthy();
    expect(element).toMatchSnapshot();
  });

  it("Home Component should call services if no data present in context", () => {
    useContextMock.mockReturnValue(sampleEmptyContextData);
    const element = shallow(<Home />);
    expect(element).toBeTruthy();
  });
  it("Home Component should navigate to products page when clicked on explore right button", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(<Home />);
    const exploreRightButton = element.find(".explore-right-button");
    exploreRightButton.simulate("click");
  });
  it("Home Component should navigate to products page when clicked on explore left button", () => {
    useContextMock.mockReturnValue(sampleContextData);
    const element = shallow(<Home />);
    const exploreLeftButton = element.find(".explore-left-button");
    exploreLeftButton.simulate("click");
  });
});

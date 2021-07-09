import React from "react";
import Footer from "./Footer";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Tests for Footer Component", () => {
  const tree = shallow(<Footer />);
  it("Footer component should match with snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});

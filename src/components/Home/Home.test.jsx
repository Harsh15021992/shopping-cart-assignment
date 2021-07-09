import React from "react";
import Home from "./Home";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Tests for Home Component", () => {
  const tree = shallow(<Home />);
  it("Home component should match with snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});

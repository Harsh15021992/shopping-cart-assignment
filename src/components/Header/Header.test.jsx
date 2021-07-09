import React from "react";
import Header from "./Header";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Tests for Header component", () => {
  const tree = shallow(<Header />);
  it("match header with snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});

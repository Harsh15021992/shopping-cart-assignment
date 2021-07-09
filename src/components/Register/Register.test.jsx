import React from "react";
import Register from "./Register";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Tests for Register Component", () => {
  const tree = shallow(<Register />);
  it("Register component should match with snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import Login from "./Login";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Tests for Login Component", () => {
  const tree = shallow(<Login />);
  it("Login component should match with snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});

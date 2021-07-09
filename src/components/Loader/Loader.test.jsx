import React from "react";
import Loader from "./Loader";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Tests for Loader Component", () => {
  const tree = shallow(<Loader />);
  it("Loader component should match with snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});

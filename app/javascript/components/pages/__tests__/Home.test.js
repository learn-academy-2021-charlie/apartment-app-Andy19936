import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../Home";

Enzyme.configure({ adapter: new Adapter() });

describe("When home renders", () => {
  it("displays a home intro", () => {
    const renderHome = shallow(< Home />);
    const homeHeading = renderHome.find("h1");
    expect(homeHeading.text()).toEqual("this is the home page");
  });
});
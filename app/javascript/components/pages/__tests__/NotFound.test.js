import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "../NotFound";

Enzyme.configure({ adapter: new Adapter() });

describe("When NotFound renders", () => {
  it("displays a notfound intro", () => {
    const renderNotFound = shallow(< NotFound />);
    const notFoundHeading = renderNotFound.find("h1");
    expect(notFoundHeading.text()).toEqual("this is the not found page");
  });
});
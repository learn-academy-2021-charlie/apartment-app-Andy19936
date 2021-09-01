import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentIndex from "../ApartmentIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("When DevIndex render", () => {
  it("displays an index intro", () => {
    const ApartmentIndex = shallow(<DevIndex />);
    const indexHeading = ApartmentIndex.find("h1");
    expect(indexHeading.text()).toEqual(" See our Apartments");
  });
});

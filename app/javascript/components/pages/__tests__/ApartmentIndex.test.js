import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentIndex from "../ApartmentIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("When ApartmentIndex renders", () => {
  it("displays an index intro", () => {
    const renderIndex = shallow(< ApartmentIndex />);
    const indexHeading = renderIndex.find("h1");
    expect(indexHeading.text()).toEqual(" See our Apartments");
  });
});

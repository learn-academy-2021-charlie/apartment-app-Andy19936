import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentShow from "../ApartmentShow";

Enzyme.configure({ adapter: new Adapter() });

describe("When ApartmentShow renders", () => {
  it("displays a show intro", () => {
    const renderShow = shallow(< ApartmentShow />);
    const showHeading = renderShow.find("h1");
    expect(showHeading.text()).toEqual("");
  });
});

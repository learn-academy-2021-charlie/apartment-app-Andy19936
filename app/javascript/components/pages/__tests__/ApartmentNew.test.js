import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentNew from "../ApartmentNew";

Enzyme.configure({ adapter: new Adapter() });

describe("When ApartmentNew renders", () => {
    let user = {
        user_id:1}

  it("displays a new intro", () => {
    const renderNew = shallow(< ApartmentNew user={user} />);
    const newHeading = renderNew.find("h1");
    expect(newHeading.text()).toEqual("this is the new page");
  });
});
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentEdit from "../ApartmentEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When ApartmentEdit renders", () => {
    let user ={
        user_id:1
    }
  it("displays an edit intro", () => {
    const renderEdit = shallow(< ApartmentEdit user={user} />);
    const editHeading = renderEdit.find("h1");
    expect(editHeading.text()).toEqual("this is the edit page");
  });
});

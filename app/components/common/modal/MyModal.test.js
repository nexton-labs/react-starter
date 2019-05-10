import React from "react";
import { shallow } from "enzyme";
import MyModal from "./MyModal";

function setup(properties) {
  return shallow(<MyModal {...properties} />);
}

describe("<MyModal /> component", () => {
  it("renders itself", () => {
    // Arrange
    const componentSetup = {
      okButtonLabel: "Ok",
      cancelButtonLabel: "cancel",
      body: {},
      isOpen: false,
      modalTitle: "Modal Test",
      okCallback: () => {},
      cancelCallback: () => {}
    };

    // Act
    const wrapper = setup(componentSetup);

    // Assert
    expect(wrapper.find("Modal")).toHaveLength(1);
  });
});

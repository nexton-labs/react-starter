import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "./NotFoundPage";

function setup(properties) {
  return shallow(<NotFoundPage {...properties} />);
}

describe("<NotFoundPage /> component", () => {
  it("renders itself", () => {
    // Arrange Act
    const wrapper = setup();
    const subtitle = wrapper.find("h2");
    const goBackHome = wrapper.find("Link");
    expect(wrapper.find("section")).toHaveLength(1);

    // Assert
    expect(subtitle).toHaveLength(1);
    expect(subtitle.text()).toBe("Page not found");
    expect(goBackHome).toHaveLength(1);
    expect(goBackHome.props().to).toBe("/");
  });
});

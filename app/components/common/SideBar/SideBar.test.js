import React from "react";
import { shallow } from "enzyme";
import { SideBar } from "./SideBar";

function setup(properties) {
  return shallow(<SideBar {...properties} />);
}

describe("<SideBar /> component", () => {
  let wrapper;

  describe("WHEN render by default", () => {
    beforeAll(() => {
      wrapper = setup();
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });
  });
});

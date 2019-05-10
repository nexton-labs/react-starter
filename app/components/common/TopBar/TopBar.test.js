import React from "react";
import { shallow } from "enzyme";
import { TopBar } from "./TopBar";

function setup(properties) {
  return shallow(<TopBar {...properties} />);
}

describe("<TopBar /> component", () => {
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

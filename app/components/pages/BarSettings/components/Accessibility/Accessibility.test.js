import React from "react";
import { shallow } from "enzyme";
import Accessibility from "./Accessibility";

function setup(properties) {
  return shallow(<Accessibility {...properties} />);
}

describe("<Accessibility /> component", () => {
  let wrapper;

  describe("WHEN render by default", () => {
    beforeAll(() => {
      wrapper = setup();
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should has 5 inputs", () => {
      expect(wrapper.find("input")).toHaveLength(5);
    });

    it("THEN should has 1 button", () => {
      expect(wrapper.find("button")).toHaveLength(1);
    });

    it("THEN should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

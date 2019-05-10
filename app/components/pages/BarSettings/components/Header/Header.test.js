import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

function setup(properties) {
  return shallow(<Header {...properties} />);
}

describe("<Header /> component", () => {
  let wrapper;

  describe("WHEN render by default", () => {
    beforeAll(() => {
      wrapper = setup();
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should has 2 anchors", () => {
      expect(wrapper.find("a")).toHaveLength(2);
    });

    it("THEN should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
import Domain from "./Domain";

function setup(properties) {
  return shallow(<Domain {...properties} />);
}

describe("<Domain /> component", () => {
  let wrapper;

  describe("WHEN render by default", () => {
    beforeAll(() => {
      wrapper = setup();
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should has 2 inputs", () => {
      expect(wrapper.find("input")).toHaveLength(2);
    });

    it("THEN should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

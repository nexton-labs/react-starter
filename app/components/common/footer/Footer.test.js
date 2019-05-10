import React from "react";
import { shallow } from "enzyme";
import { Footer } from "./Footer";

function setup(properties) {
  return shallow(<Footer {...properties} />);
}

describe("<Footer /> component", () => {
  let wrapper;

  describe("WHEN render by default", () => {
    beforeAll(() => {
      wrapper = setup();
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

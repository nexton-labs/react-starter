import React from "react";
import { shallow } from "enzyme";
import App from "./App";

function setup(properties) {
  return shallow(<App {...properties} />);
}

describe("<App /> component", () => {
  let wrapper;

  describe("WHEN render by default", () => {
    beforeAll(() => {
      wrapper = setup();
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should has wrapper", () => {
      expect(wrapper.find("#wrapper")).toBeDefined();
    });

    it("THEN should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

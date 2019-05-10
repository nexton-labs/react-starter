import React from "react";
import { shallow } from "enzyme";
import Notification from "./Notification";

function setup(properties) {
  return shallow(<Notification {...properties} />);
}

describe("<Notification /> component", () => {
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

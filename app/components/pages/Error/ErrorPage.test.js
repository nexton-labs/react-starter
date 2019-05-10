import React from "react";
import { shallow } from "enzyme";
import { ErrorPage } from "./ErrorPage";

function setup(properties) {
  return shallow(<ErrorPage {...properties} />);
}

describe("<ErrorPage /> component", () => {
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

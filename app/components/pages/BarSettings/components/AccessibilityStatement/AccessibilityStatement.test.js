import React from "react";
import { shallow } from "enzyme";
import AccessibilityStatement from "./AccessibilityStatement";
import { Editor } from "react-draft-wysiwyg";

function setup(properties) {
  return shallow(<AccessibilityStatement {...properties} />);
}

describe("<AccessibilityStatement /> component", () => {
  let wrapper;

  describe("WHEN render by default", () => {
    beforeAll(() => {
      wrapper = setup();
    });

    it("THEN should has a Editor component", () => {
      expect(wrapper.find(Editor)).toHaveLength(1);
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });
  });
});

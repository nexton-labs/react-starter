import React from "react";
import { shallow } from "enzyme";
import EmbedWebWidget from "./EmbedWebWidget";
import { CopyToClipboard } from "react-copy-to-clipboard";

function setup(properties) {
  return shallow(<EmbedWebWidget {...properties} />);
}

describe("<EmbedWebWidget /> component", () => {
  let wrapper;

  describe("WHEN render by default", () => {
    beforeAll(() => {
      wrapper = setup();
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should has a CopyToClipboard component", () => {
      expect(wrapper.find(CopyToClipboard)).toHaveLength(1);
    });

    it("THEN should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

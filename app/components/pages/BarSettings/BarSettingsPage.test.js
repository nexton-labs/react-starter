import React from "react";
import { shallow } from "enzyme";
import { BarSettingsPage } from "./BarSettingsPage";

import Loading from "../../../components/common/loading/Loading";
import Header from "./components/Header/Header";
import Accessibility from "./components/Accessibility/Accessibility";
import Domain from "./components/Domain/Domain";
import AccessibilityStatement from "./components/AccessibilityStatement/AccessibilityStatement";
import EmbedWebWidget from "./components/EmbedWebWidget/EmbedWebWidget";

function setup(properties) {
  return shallow(<BarSettingsPage {...properties} />);
}

describe("<BarSettingsPage /> component", () => {
  let wrapper;

  describe("WHEN render with Bar data", () => {
    beforeAll(() => {
      const props = {
        bar: {
          data: {
            id: "1234"
          }
        }
      };
      wrapper = setup(props);
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("THEN should has a Header component", () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });

    it("THEN should has a Accessibility component", () => {
      expect(wrapper.find(Accessibility)).toHaveLength(1);
    });

    it("THEN should has a Domain component", () => {
      expect(wrapper.find(Domain)).toHaveLength(1);
    });

    it("THEN should has a AccessibilityStatement component", () => {
      expect(wrapper.find(AccessibilityStatement)).toHaveLength(1);
    });

    it("THEN should has a EmbedWebWidget component", () => {
      expect(wrapper.find(EmbedWebWidget)).toHaveLength(1);
    });
  });

  describe("WHEN render without data", () => {
    beforeAll(() => {
      const props = {
        bar: {}
      };
      wrapper = setup(props);
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("THEN should has a Loading component", () => {
      expect(wrapper.find(Loading)).toHaveLength(1);
    });
  });
});

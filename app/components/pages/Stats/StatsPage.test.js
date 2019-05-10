import React from "react";
import { shallow } from "enzyme";
import { StatsPage } from "./StatsPage";

function setup(properties) {
  return shallow(<StatsPage {...properties} />);
}

describe("<StatsPage /> component", () => {
  let wrapper;

  describe("WHEN render with stats data", () => {
    beforeAll(() => {
      const props = {
        bar: {
          data: {
            id: 123456,
            stats: {
              stats: [{}]
            }
          }
        }
      };
      wrapper = setup(props);
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should has a ResponsiveContainer", () => {
      expect(wrapper.find("ResponsiveContainer")).toBeDefined();
    });
  });

  describe("WHEN render without stats data", () => {
    beforeAll(() => {
      const props = {
        bar: {
          data: {
            id: 123456
          }
        }
      };
      wrapper = setup(props);
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should does not have a ResponsiveContainer", () => {
      expect(wrapper.find("ResponsiveContainer")).toHaveLength(0);
    });

    it("THEN should has not data container", () => {
      expect(wrapper.find(".graph-not-data")).toBeDefined();
    });
  });
});

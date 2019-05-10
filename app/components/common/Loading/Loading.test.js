import React from "react";
import { shallow } from "enzyme";
import Loading from "./Loading";

const setup = () => shallow(<Loading />);

describe("Loading", () => {
  describe("When renders", () => {
    const wrapper = setup();

    it("should have a ring", () => {
      expect(wrapper.find(".lds-ring")).toHaveLength(1);
    });
  });
});

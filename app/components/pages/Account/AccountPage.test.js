import React from "react";
import { shallow } from "enzyme";
import { AccountPage } from "./AccountPage";

import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Loading from "../../../components/common/loading/Loading";
import UserInfo from "./components/UserInfo/UserInfo";

function setup(properties) {
  return shallow(<AccountPage {...properties} />);
}

describe("<AccountPage /> component", () => {
  let wrapper;

  describe("WHEN render with data", () => {
    beforeAll(() => {
      const props = {
        user: {
          data: {
            fullName: "developer",
            email: "developer@mail.co",
            phoneNumber: "122-333-4446",
            title: "dev"
          }
        }
      };
      wrapper = setup(props);
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should has a main container", () => {
      expect(wrapper.find(".container-fluid")).toHaveLength(1);
    });

    it("THEN should has a Section Title component", () => {
      expect(wrapper.find(SectionTitle)).toHaveLength(1);
    });

    it("THEN should has a UserInfo component", () => {
      expect(wrapper.find(UserInfo)).toHaveLength(1);
    });

    it("THEN should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("WHEN render without data", () => {
    beforeAll(() => {
      wrapper = setup();
    });

    it("THEN should render component", () => {
      expect(wrapper).toBeDefined();
    });

    it("THEN should has a Loading component", () => {
      expect(wrapper.find(Loading)).toHaveLength(1);
    });
  });
});

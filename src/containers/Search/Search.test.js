import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchContainer from "./";
import Search from "../../components/Search/";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/");

describe("Search container", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper.exists()).toBe(true);
  });

  test("should render Search component", () => {
    const wrapper = mount(<SearchContainer />);

    expect(wrapper.children(Search).length).toEqual(1);
  });

  test("should update articles state", () => {
    const wrapper = mount(<SearchContainer />);

    expect(wrapper.state().articles).toEqual([]);

    const { performSearch } = wrapper.find(Search).props();

    return performSearch().then(() => {
      expect(wrapper.state().articles).toHaveLength(10);
    });
  });
});

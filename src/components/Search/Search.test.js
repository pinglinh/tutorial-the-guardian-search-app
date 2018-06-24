import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Search from "./";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Search component", () => {
  test("renders", () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.exists()).toBe(true);
  });

  test("user text is echoed", () => {
    const wrapper = shallow(<Search performSearch={() => {}} />);

    wrapper.find("input").simulate("change", {
      target: { value: "hello" }
    });

    expect(wrapper.find("input").props().value).toEqual("hello");
  });

  test("when the form is submitted the event is cancelled", () => {
    const wrapper = shallow(<Search />);
    let prevented = false;
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });

  test("renders search results when the articles change", () => {
    const wrapper = mount(<Search articles={[]} />);

    wrapper.setProps({
      articles: [{ webUrl: "http://google.com", webTitle: "Google Search" }]
    });

    expect(wrapper.find("a").prop("href")).toEqual("http://google.com");
  });
});

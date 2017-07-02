import { MultiSelect } from "./index";
import { mount } from "enzyme";
import React from "react";

test("Multiselect should filter result", () => {
  var options = [
    {
      name: "test",
      value: "test"
    },
    {
      name: "test2",
      value: "test2"
    },
    {
      name: "test3",
      value: "test3"
    }
  ];
  const wrapper = mount(<MultiSelect options={options} />);
  wrapper.find("button").simulate("click");
  expect(wrapper.state().show).toEqual(true);
  wrapper
    .find(".ms-search input")
    .simulate("change", { target: { value: "test2" } });
  expect(wrapper.find("li").length).toEqual(2);
});

test("User should be able to check multiple items", () => {
  var options = [
    {
      name: "test",
      value: "test"
    },
    {
      name: "test2",
      value: "test2"
    },
    {
      name: "test3",
      value: "test3"
    }
  ];
  const onBlur = jest.fn();
  const wrapper = mount(<MultiSelect options={options} onBlur={onBlur} />);

  wrapper.find("button").simulate("click");
  wrapper
    .find("ul")
    .childAt(1)
    .find("input")
    .simulate("change", { target: { checked: true } });
  expect(wrapper.find("button span").text()).toEqual(
    "1 of " + options.length + " selected"
  );
  wrapper.find(".click-overlay").simulate("click");
  expect(onBlur).toBeCalledWith([{ name: "test", value: "test" }]);
});

test("Select all should select only filtered options", () => {
  var options = [
    {
      name: "test1",
      value: "test1"
    },
    {
      name: "test2",
      value: "test2"
    },
    {
      name: "test3",
      value: "test3"
    }
  ];
  const wrapper = mount(<MultiSelect options={options} />);
  wrapper
    .find(".ms-search input")
    .simulate("change", { target: { value: "test1" } });
  const selectAll = wrapper.find("ul li").first();
  expect(selectAll.text()).toEqual("Select All");
  selectAll.find("input").simulate("change", { target: { checked: true } });
  expect(wrapper.state().placeholder).toEqual(
    "1 of " + options.length + " selected"
  );
});

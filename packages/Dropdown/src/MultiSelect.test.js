import { MultiSelect } from "./index";
import { mount } from "enzyme";
import React from "react";

test("Multiselect", () => {
  var options = [
    {
      name: "test",
      value: "test"
    }
  ];
  const wrapper = mount(<MultiSelect options={options} />);
  expect(wrapper.find("li").length).toEqual(options.length + 1);
});

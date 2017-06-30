import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, Badge } from "../packages/Form/src";
import { Table } from "../packages/Styles/demo/";
import { Header } from "../packages/Header/src";
import { Popover, SingleSelect, MultiSelect } from "../packages/Dropdown/src";

//import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const stories = storiesOf("FORM ELEMENTS", module);
//stories.addDecorator(withKnobs);

stories.addWithPropsCombinations("Button", Button, {
  onClick: [action("clicked")],
  type: ["primary"],
  size: ["", "full-width"],
  children: ["Click"]
});

stories.addWithPropsCombinations("Header", Header, {
  title: ["IKEA"],
  children: [<h1>content</h1>]
});

stories.addWithPropsCombinations("Badge", Badge, {
  children: ["123"]
});
stories.add("Table", () => <Table />);

var dropdownOptions = "123456789".split("").map(i => {
  return { name: "name" + i, value: "value" + i };
});

storiesOf("Dropdown", module)
  .addWithPropsCombinations("Popover", Popover, {
    children: [
      <ul>
        <li><a href="">test</a></li>
      </ul>
    ]
  })
  .addWithPropsCombinations("SingleSelect", SingleSelect, {
    width: [40],
    onClick: [action("clicked")],
    options: [dropdownOptions]
  })
  .addWithPropsCombinations("MultiSelect", MultiSelect, {
    width: [30],
    onBlur: [action("clicked")],
    options: [dropdownOptions]
  });

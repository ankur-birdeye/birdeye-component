import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../packages/Button/src";
import { Table } from "../packages/Styles/src/";
import { Header } from "../packages/Header/src";
import { Badge } from "../packages/Badge/src";
import { Popover, Dropdown } from "../packages/Dropdown/src";

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

storiesOf("Dropdown", module)
  .addWithPropsCombinations("Popover", Popover, {
    children: [
      <ul>
        <li><a href="">test</a></li>
      </ul>
    ]
  })
  .addWithPropsCombinations("Dropdown", Dropdown, {
    children: [
      <ul>
        <li><a href="">test</a></li>
      </ul>
    ]
  });

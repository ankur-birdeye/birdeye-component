import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import infoAddon, { setDefaults } from "@storybook/addon-info";

import { Button, Badge } from "../packages/Form/src";
import { Table } from "../packages/Styles/src/";
import { Header } from "../packages/Header/src";
import { Popover, SingleSelect, MultiSelect } from "../packages/Dropdown/src";

setAddon(infoAddon);
setDefaults({
  inline: true
});
//import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const stories = storiesOf("Form", module);
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

stories.addWithInfo("Table", "React Componont for Table", () => (
  <Table>
    <thead>
      <tr>
        <th>Site Name</th>
        <th>Business Name</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Yahoo</td>
        <td>Not Found</td>
        <td className="error">Business Not Found</td>
      </tr>
    </tbody>
  </Table>
));

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

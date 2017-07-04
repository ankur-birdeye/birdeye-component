import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import infoAddon, { setDefaults } from "@storybook/addon-info";

import { Button, Badge } from "../packages/Form/src";
import { Table } from "../packages/Styles/src/";
import { Header } from "../packages/Header/src";
import { Popover, SingleSelect, MultiSelect } from "../packages/Dropdown/src";
import { Tab, Tabs, TabList, TabPanel } from "../packages/Styles/src/tabs";

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

storiesOf("Header", module).addWithPropsCombinations("Header", Header, {
  title: ["IKEA"],
  children: [<h1>content</h1>]
});

var dropdownOptions = "123456789".split("").map(i => {
  return { name: "name" + i, value: "value" + i };
});

storiesOf("Dropdown", module)
  .addWithPropsCombinations("Popover", Popover, {
    children: [
      <ul>
        <li><a href="">test</a></li>
      </ul>
    ],
    float: ["", "right"]
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

storiesOf("Tabs", module).addWithInfo("Default", "Default", () => (
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
));

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../packages/Button/src";
import { Header } from "../packages/Header/src";

//import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const stories = storiesOf("Button", module);
//stories.addDecorator(withKnobs);

stories.addWithPropsCombinations("Default", Button, {
  onClick: [action("clicked")],
  type: ["primary"],
  size: ["", "full-width"],
  children: ["Click"]
});

storiesOf("Header", module).addWithPropsCombinations("Default", Header, {
  title: ["IKEA"],
  children: [<h1>content</h1>]
});

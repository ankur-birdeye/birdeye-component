import { configure } from "@storybook/react";

function loadStories() {
  require("../packages/index.js");

  // You can require as many stories as you need.
}

configure(loadStories, module);

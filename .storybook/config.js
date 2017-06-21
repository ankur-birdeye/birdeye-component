import { configure, setAddon } from "@storybook/react";
import infoAddon from "@storybook/addon-info";
import { setOptions } from "@storybook/addon-options";

function loadStories() {
  require("../packages/index.js");

  // You can require as many stories as you need.
}

setOptions({
  name: "Birdeye Storybook",
  url: "https://birdeye.com",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true
});

setAddon(infoAddon);

configure(loadStories, module);

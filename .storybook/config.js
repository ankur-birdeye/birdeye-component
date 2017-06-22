import { configure, setAddon } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

import withPropsCombinations, {
  setDefaults
} from "react-storybook-addon-props-combinations";

setAddon(withPropsCombinations);
setDefaults(
  {
    // overwrite global defaults here
  }
);

function loadStories() {
  require("./storybook.js");

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

configure(loadStories, module);

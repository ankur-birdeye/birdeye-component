import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button/lib";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => (
  <Button
    onClick={action("clicked")}
    bgcolor={text("BackgroundColor", "orange")}
  >
    Hello Button
  </Button>
));

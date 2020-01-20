import { storiesOf } from "@storybook/react";
import * as React from "react";
import { PopupText, Props } from "./PopupText";

const props: Props = {
  url: "https://calendly.com/acmesales",
  text: "Click here to schedule!"
};

storiesOf("PopupText", module).add("with required props", () => (
  <PopupText {...props} />
));

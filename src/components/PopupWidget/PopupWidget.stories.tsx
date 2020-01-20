import { storiesOf } from "@storybook/react";
import * as React from "react";
import { PopupWidget, Props } from "./PopupWidget";

const props: Props = {
  url: "https://calendly.com/acmesales",
  text: "Click here to schedule!"
};

storiesOf("PopupWidget", module).add("with required props", () => (
  <PopupWidget {...props} />
));

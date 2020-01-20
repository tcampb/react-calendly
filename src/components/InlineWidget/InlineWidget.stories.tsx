import { storiesOf } from "@storybook/react";
import * as React from "react";
import { InlineWidget } from "./InlineWidget";

const props = {
  url: "https://calendly.com/acmesales"
};

storiesOf("InlineWidget", module).add("with required props", () => (
  <InlineWidget {...props} />
));

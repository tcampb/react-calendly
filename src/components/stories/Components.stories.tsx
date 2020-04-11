import "./styles.css";
const { withKnobs, text, boolean, object } = require("@storybook/addon-knobs");

import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import InlineWidget from "../InlineWidget/InlineWidget";
import PopupText from "../PopupText/PopupText";
import PopupWidget from "../PopupWidget/PopupWidget";

storiesOf("Components", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add("InlineWidget", () => (
    <InlineWidget
      url={text("url", "https://calendly.com/acmesales")}
      styles={object("styles", {
        height: "1000px",
      })}
    />
  ))
  .add("PopupText", () => (
    <PopupText
      url={text("url", "https://calendly.com/acmesales")}
      text={text("text", "Click here to schedule!")}
    />
  ))
  .add("PopupWidget", () => (
    <PopupWidget
      url={text("url", "https://calendly.com/acmesales")}
      text={text("text", "Click here to schedule!")}
      color={text("color", "#00a2ff")}
      textColor={text("textColor", "#ffffff")}
      branding={boolean("branding", true)}
    />
  ));

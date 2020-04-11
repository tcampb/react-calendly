import "./styles.css";
const { withKnobs, text, boolean, object } = require("@storybook/addon-knobs");

import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import InlineWidget from "../InlineWidget/InlineWidget";
import PopupText from "../PopupText/PopupText";
import PopupWidget from "../PopupWidget/PopupWidget";

const prefill = {
  name: "Jon Snow",
  firstName: "Jon",
  lastName: "Snow",
  email: "test@test.com",
  customAnswers: {
    a1: "a1",
    a2: "a2",
    a3: "a3",
    a4: "a4",
    a5: "a5",
    a6: "a6",
    a7: "a7",
    a8: "a8",
    a9: "a9",
    a10: "a10",
  },
};

storiesOf("Components", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add("InlineWidget", () => (
    <InlineWidget
      url={text("url", "https://calendly.com/acmesales")}
      styles={object("styles", {
        height: "1000px",
      })}
      prefill={object("prefill", prefill)}
    />
  ))
  .add("PopupText", () => (
    <PopupText
      url={text("url", "https://calendly.com/acmesales")}
      text={text("text", "Click here to schedule!")}
      prefill={object("prefill", prefill)}
    />
  ))
  .add("PopupWidget", () => (
    <PopupWidget
      url={text("url", "https://calendly.com/acmesales")}
      text={text("text", "Click here to schedule!")}
      color={text("color", "#00a2ff")}
      textColor={text("textColor", "#ffffff")}
      branding={boolean("branding", true)}
      prefill={object("prefill", prefill)}
    />
  ));

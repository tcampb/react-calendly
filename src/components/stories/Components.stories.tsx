import './styles.css';

import { storiesOf } from "@storybook/react";
import * as React from "react";
import { InlineWidget } from "../InlineWidget/InlineWidget";
import { PopupText } from "../PopupText/PopupText";
import { PopupWidget } from "../PopupWidget/PopupWidget";

const inlineWidgetProps = {
  url: "https://calendly.com/acmesales",
  styles: {
    height: "1000px"
  }
};

const popupTextProps = {
  url: "https://calendly.com/acmesales",
  text: "Click here to schedule!"
};


const popupWidgetProps = {
  url: "https://calendly.com/acmesales",
  text: "Click here to schedule!",
  styles: {
    height: "1000px"
  }
};


storiesOf("Components", module).add("InlineWidget", () => (
  <InlineWidget {...inlineWidgetProps} />
  )).add("PopupText", () => (
    <div>
      <PopupText {...popupTextProps} />
    </div>
  )).add("PopupWidget", () =>
  <PopupWidget {...popupWidgetProps} />
  )

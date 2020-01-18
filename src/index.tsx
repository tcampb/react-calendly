/**
 * @class ExampleComponent
 */

import * as React from "react";
import { PopupText } from "./components/PopupText";

export type Props = { text: string };

export default class ExampleComponent extends React.Component<Props> {
  render() {
    return (
      // <PopupWidget
      //   url={"https://calendly.com/tcampb30/phone-call"}
      //   color={"blue"}
      //   text={"a"}
      //   textColor={"white"}
      //   branding={false}
      // />
      <PopupText url={"https://calendly.com/tcampb30/phone-call"} text={"a"} />
    );
  }
}

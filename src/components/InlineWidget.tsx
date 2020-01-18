import * as React from "react";
import { loadScript } from "../calendly";

interface Props {
  url: string;
  styles?: React.CSSProperties | undefined;
}

const defaultStyles = {
  minWidth: "320px",
  height: "630px"
};

export class InlineWidget extends React.Component<Props> {
  componentDidMount() {
    loadScript();
  }

  render() {
    return (
      <div
        className="calendly-inline-widget"
        style={this.props.styles || defaultStyles}
        data-url={this.props.url}
      ></div>
    );
  }
}

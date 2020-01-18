import * as React from "react";
import { loadScript, loadStyleSheet } from "../calendly";

interface Props {
  url: string;
  text: string;
}

export class PopupText extends React.Component<Props> {
  componentDidMount() {
    loadScript();
    loadStyleSheet();
  }

  componentWillUnmount() {
    window.Calendly.closePopupWidget();
  }

  private onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const url = this.props.url;
    window.Calendly.initPopupWidget({
      url
    });
    e.preventDefault();
  };

  render() {
    return (
      <a href="" onClick={this.onClick}>
        {this.props.text}
      </a>
    );
  }
}

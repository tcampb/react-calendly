import * as React from "react";
import { loadScript, loadStyleSheet } from "../../calendly";

export interface Props {
  url: string;
  text: string;
}

const createClickHandler = (url: string) => (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  e.preventDefault();
  return window.Calendly.initPopupWidget({
    url
  });
};

export class PopupText extends React.Component<Props> {
  componentDidMount() {
    loadScript();
    loadStyleSheet();
  }

  componentWillUnmount() {
    window.Calendly.closePopupWidget();
  }

  render() {
    return (
      <a href="" onClick={createClickHandler(this.props.url)}>
        {this.props.text}
      </a>
    );
  }
}

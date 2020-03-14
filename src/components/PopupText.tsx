import * as React from "react";
import { loadScript, loadStyleSheet } from "../calendly";
import {
  CALENDLY_SCRIPT_SOURCE,
  CALENDLY_STYLESHEET_SOURCE
} from "../constants";

interface Props {
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
    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_SOURCE}"]`)) {
      loadScript();
    }
    if (!document.querySelector(`link[href="${CALENDLY_STYLESHEET_SOURCE}"]`)) {
      loadStyleSheet();
    }
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

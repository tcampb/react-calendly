import * as React from "react";
import { loadScript, loadStyleSheet } from "../../calendly";
import {
  CALENDLY_SCRIPT_SOURCE,
  CALENDLY_STYLESHEET_SOURCE,
} from "../../constants";
import { Prefill } from "../../calendly";

export interface Props {
  url: string;
  text: string;
  prefill?: Prefill;
}

export interface PopupWidgetOptions {
  url: string;
  prefill?: Prefill;
}

const initWidget = (options: PopupWidgetOptions) => {
  window.Calendly.initPopupWidget(options);
};

const createClickHandler = (widgetOptions: PopupWidgetOptions) => (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  e.preventDefault();
  return initWidget(widgetOptions);
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
    const widgetOptions: PopupWidgetOptions = {
      url: this.props.url,
      prefill: this.props.prefill,
    };
    return (
      <a href="" onClick={createClickHandler(widgetOptions)}>
        {this.props.text}
      </a>
    );
  }
}

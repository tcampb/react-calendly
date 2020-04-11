import * as React from "react";
import { loadScript, loadStyleSheet } from "../../calendly";
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

class PopupText extends React.Component<Props> {
  componentWillUnmount() {
    window.Calendly.closePopupWidget();
  }

  componentDidMount() {
    loadScript();
    loadStyleSheet();
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

export default PopupText;

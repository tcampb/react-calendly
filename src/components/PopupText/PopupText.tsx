import * as React from "react";
import {
  loadScript,
  loadStyleSheet,
  PageSettings,
  withPageSettings,
  Prefill,
  Utm,
} from "../../calendly";

export interface Props {
  url: string;
  text: string;
  prefill?: Prefill;
  utm?: Utm;
  pageSettings?: PageSettings;
  styles?: React.CSSProperties | undefined;
  className?: string;
}

export interface PopupWidgetOptions {
  url: string;
  prefill?: Prefill;
  utm?: Utm;
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
      url: withPageSettings(this.props.url, this.props.pageSettings),
      prefill: this.props.prefill,
      utm: this.props.utm,
    };
    return (
      <a
        href="#0"
        onClick={createClickHandler(widgetOptions)}
        style={this.props.styles || {}}
        className={this.props.className || ""}
      >
        {this.props.text}
      </a>
    );
  }
}

export default PopupText;

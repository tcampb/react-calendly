import * as React from "react";
import '../../calendly-widget.css';
import {
  loadScript,
  PageSettings,
  withPageSettings,
  Prefill,
  Utm,
} from "../../calendly";

export interface Props {
  url: string;
  text: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
  prefill?: Prefill;
  utm?: Utm;
  pageSettings?: PageSettings;
}

const defaultProps: Partial<Props> = {
  branding: false,
  color: "#00a2ff",
  textColor: "#ffffff",
  text: "Schedule time with me",
};

class PopupWidget extends React.Component<Props> {
  componentDidUpdate() {
    const options = {
      ...defaultProps,
      ...this.props,
      url: withPageSettings(this.props.url, this.props.pageSettings),
    };

    window.Calendly.initBadgeWidget(options);
  }

  componentDidMount() {
    loadScript();

    const options = {
      ...defaultProps,
      ...this.props,
      url: withPageSettings(this.props.url, this.props.pageSettings),
    };

    window.Calendly.initBadgeWidget(options);
  }

  componentWillUnmount() {
    window.Calendly.destroyBadgeWidget();
    window.Calendly.closePopupWidget();
  }

  render() {
    return <></>;
  }
}

export default PopupWidget;

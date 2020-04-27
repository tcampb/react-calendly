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
};

class PopupWidget extends React.Component<Props> {
  componentWillReceiveProps(nextProps: Props) {
    window.Calendly.initBadgeWidget({
      ...defaultProps,
      ...nextProps,
      url: withPageSettings(nextProps.url, nextProps.pageSettings),
    });
  }

  componentDidMount() {
    loadScript();
    loadStyleSheet();

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

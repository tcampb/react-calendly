import * as React from "react";
import { loadScript, loadStyleSheet } from "../../calendly";
import {
  CALENDLY_STYLESHEET_SOURCE,
  CALENDLY_SCRIPT_SOURCE,
} from "../../constants";
import { Prefill } from "../../calendly";

export interface Props {
  url: string;
  text: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
  prefill?: Prefill;
}

const defaultProps: Partial<Props> = {
  branding: false,
  color: "#00a2ff",
  textColor: "#ffffff",
};

export class PopupWidget extends React.Component<Props> {
  componentWillReceiveProps(nextProps: Props) {
    window.Calendly.initBadgeWidget({
      ...defaultProps,
      ...nextProps,
    });
  }

  componentDidMount() {
    const options = {
      ...defaultProps,
      ...this.props,
    };

    const onLoad = () => {
      window.Calendly.initBadgeWidget(options);
    };

    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_SOURCE}"]`)) {
      loadScript(onLoad);
    } else {
      window.Calendly.initBadgeWidget(options);
    }

    if (!document.querySelector(`link[href="${CALENDLY_STYLESHEET_SOURCE}"]`)) {
      loadStyleSheet();
    }
  }

  componentWillUnmount() {
    window.Calendly.destroyBadgeWidget();
    window.Calendly.closePopupWidget();
  }

  render() {
    return <></>;
  }
}

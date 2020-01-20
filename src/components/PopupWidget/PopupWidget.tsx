import * as React from "react";
import { loadScript, loadStyleSheet } from "../../calendly";

export interface Props {
  url: string;
  text: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

const defaultProps: Partial<Props> = {
  branding: false,
  color: "#00a2ff",
  textColor: "#ffffff"
};

export class PopupWidget extends React.Component<Props> {
  componentDidMount() {
    const onLoad = () => {
      const options = {
        ...defaultProps,
        ...this.props
      };
      window.Calendly.initBadgeWidget(options);
    };

    loadScript(onLoad);
    loadStyleSheet();
  }

  componentWillUnmount() {
    window.Calendly.destroyBadgeWidget();
    window.Calendly.closePopupWidget();
  }

  render() {
    return <></>;
  }
}

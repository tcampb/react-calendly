import "../../calendly-widget.css";
import * as React from "react";
import { withCalendly } from "../../calendly";

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
  textColor: "#ffffff",
};

class PopupWidget extends React.Component<Props> {
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

export default withCalendly(PopupWidget);

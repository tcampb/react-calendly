import * as React from "react";
import Calendly, { ICalendly, loadScript, loadStyleSheet } from "../calendly";

export interface Props {
  url: string;
  text: string;
  color: string;
  textColor: string;
  branding: boolean;
}

export class PopupWidget extends React.Component<Props> {
  componentDidMount() {
    const onLoad = () => {
      const options = {
        ...this.props
      };
      Calendly.initBadgeWidget(options);
    };

    loadScript(onLoad);
    loadStyleSheet();
  }

  componentWillUnmount() {
    (Calendly as ICalendly).destroyBadgeWidget();
    (Calendly as ICalendly).closePopupWidget();
  }

  render() {
    return <></>;
  }
}

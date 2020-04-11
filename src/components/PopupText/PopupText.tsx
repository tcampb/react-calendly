import "../../calendly-widget.css";
import * as React from "react";
import { withCalendly } from "../../calendly";

export interface Props {
  url: string;
  text: string;
}

const createClickHandler = (url: string) => (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  e.preventDefault();
  return window.Calendly.initPopupWidget({
    url,
  });
};

class PopupText extends React.Component<Props> {
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

export default withCalendly(PopupText);

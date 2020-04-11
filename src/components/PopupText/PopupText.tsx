import * as React from "react";
import { loadScript, loadStyleSheet } from "../../calendly";

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

  componentDidMount() {
    loadScript();
    loadStyleSheet();
  }

  render() {
    return (
      <a href="" onClick={createClickHandler(this.props.url)}>
        {this.props.text}
      </a>
    );
  }
}

export default PopupText;

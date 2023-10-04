import * as React from "react";
import "../../calendly-widget.css";
import { PageSettings, Prefill, Utm, IframeTitle, LoadingSpinner } from "../../calendly";
import Modal from "../PopupModal/Modal";

export interface Props {
  url: string;
  text: string;
  rootElement: HTMLElement;
  prefill?: Prefill;
  utm?: Utm;
  pageSettings?: PageSettings;
  styles?: React.CSSProperties | undefined;
  className?: string;
  iframeTitle?: IframeTitle;
  LoadingSpinner?: LoadingSpinner;
}

class PopupButton extends React.Component<Props, { isOpen: boolean }> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClick(e: React.SyntheticEvent) {
    e.preventDefault();
    this.setState({
      isOpen: true,
    });
  }

  onClose(e: React.SyntheticEvent) {
    e.stopPropagation();

    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <>
        <button
          onClick={this.onClick}
          style={this.props.styles || {}}
          className={this.props.className || ""}
        >
          {this.props.text}
        </button>
        <Modal
          {...this.props}
          open={this.state.isOpen}
          onModalClose={this.onClose}
          rootElement={this.props.rootElement}
        />
      </>
    );
  }
}

export default PopupButton;

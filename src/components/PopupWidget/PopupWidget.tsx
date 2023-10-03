import * as React from "react";
import "../../calendly-widget.css";
import { PageSettings, Prefill, Utm, IframeTitle, LoadingSpinner } from "../../calendly";
import Modal from "../PopupModal/Modal";

export interface Props {
  url: string;
  text: string;
  rootElement: HTMLElement;
  color?: string;
  textColor?: string;
  branding?: boolean;
  prefill?: Prefill;
  utm?: Utm;
  pageSettings?: PageSettings;
  iframeTitle?: IframeTitle;
  LoadingSpinner?: LoadingSpinner;
}

class PopupWidget extends React.Component<Props, { isOpen: boolean }> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClick() {
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
      <div className="calendly-badge-widget" onClick={this.onClick}>
        <div
          className="calendly-badge-content"
          style={{
            background: this.props.color || "#00a2ff",
            color: this.props.textColor || "#ffffff",
          }}
        >
          {this.props.text || "Schedule time with me"}
          {this.props.branding && <span>powered by Calendly</span>}
        </div>
        <Modal
          {...this.props}
          open={this.state.isOpen}
          onModalClose={this.onClose}
          rootElement={this.props.rootElement}
        />
      </div>
    );
  }
}

export default PopupWidget;

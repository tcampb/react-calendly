import * as React from "react";
import * as ReactDom from "react-dom";
import { LoadingSpinner } from "../../calendly";
import ModalContent, { Props as ModalContentProps } from "./ModalContent";

interface Props extends ModalContentProps {
  onModalClose: (e: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
  rootElement: HTMLElement;
  LoadingSpinner?: LoadingSpinner;
  persistent?: boolean;
}

interface State {
  isBouncing: boolean;
}

class PopupModal extends React.Component<Props, State> {
  private bounceTimeout: number | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      isBouncing: false,
    };
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }

  componentWillUnmount() {
    if (this.bounceTimeout) {
      clearTimeout(this.bounceTimeout);
    }
  }

  handleOverlayClick(e: React.MouseEvent<HTMLElement>) {
    if (this.props.persistent) {
      this.setState({ isBouncing: true });
      if (this.bounceTimeout) {
        clearTimeout(this.bounceTimeout);
      }
      this.bounceTimeout = setTimeout(() => {
        this.setState({ isBouncing: false });
        this.bounceTimeout = null;
      }, 300);
    } else {
      this.props.onModalClose(e);
    }
  }

  render() {
    if (!this.props.open) return null;

    if (!this.props.rootElement) {
      throw new Error(
        "[react-calendly]: PopupModal rootElement property cannot be undefined"
      );
    }

    const { isBouncing } = this.state;

    return ReactDom.createPortal(
      <div
        className={`calendly-overlay ${isBouncing ? "calendly-overlay--bounce" : ""}`}
      >
        <div
          onClick={this.handleOverlayClick}
          className="calendly-close-overlay"
        ></div>
        <div className="calendly-popup">
          <div className="calendly-popup-content">
            <ModalContent {...this.props} />
          </div>
        </div>
        <button
          className="calendly-popup-close"
          onClick={this.props.onModalClose}
          aria-label="Close modal"
          style={{
            display: "block",
            border: "none",
            padding: 0,
          }}
        ></button>
      </div>,
      this.props.rootElement
    );
  }
}

export default PopupModal;

import * as React from "react";
import * as ReactDom from "react-dom";
import { LoadingSpinner } from "../../calendly";
import ModalContent, { Props as ModalContentProps } from "./ModalContent";

interface Props extends ModalContentProps {
  onModalClose: (e: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
  persistent: boolean;
  rootElement: HTMLElement;
  LoadingSpinner?: LoadingSpinner;
}

export default (props: Props) => {
  if (!props.open) return null;

  if (!props.rootElement) {
    throw new Error('[react-calendly]: PopupModal rootElement property cannot be undefined')
  }

  return ReactDom.createPortal(
    <div className="calendly-overlay">
      <div
        onClick={!persistent && props.onModalClose}
        className="calendly-close-overlay"
      ></div>
      <div className="calendly-popup">
        <div className="calendly-popup-content">
          <ModalContent {...props} />
        </div>
      </div>
      <button
        className="calendly-popup-close"
        onClick={props.onModalClose}
        aria-label="Close modal"
        style={{
          display: "block",
          border: "none",
          padding: 0,
        }}
      ></button>
    </div>,
    props.rootElement
  );
};

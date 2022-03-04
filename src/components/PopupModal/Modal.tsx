import * as React from "react";
import * as ReactDom from "react-dom";
import ModalContent, { Props as ModalContentProps } from "./ModalContent";

interface Props extends ModalContentProps {
  onModalClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
  rootElement: HTMLElement;
}

export default (props: Props) => {
  if (!props.open) return null;

  return ReactDom.createPortal(
    <div className="calendly-overlay">
      <div className="calendly-close-overlay"></div>
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

import * as React from "react";
import "../../calendly-widget.css";

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className="calendly-spinner">
        <div className="calendly-bounce1"></div>
        <div className="calendly-bounce2"></div>
        <div className="calendly-bounce3"></div>
      </div>
    );
  }
}

export default LoadingSpinner;

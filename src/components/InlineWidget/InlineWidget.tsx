import * as React from "react";
import "../../calendly-widget.css";
import {
  PageSettings,
  Prefill,
  Utm,
  IframeTitle,
  formatCalendlyUrl,
  LoadingSpinner,
} from "../../calendly";
import CalendlyLoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export interface Props {
  url: string;
  prefill?: Prefill;
  utm?: Utm;
  styles?: React.CSSProperties | undefined;
  pageSettings?: PageSettings;
  iframeTitle?: IframeTitle;
  LoadingSpinner?: LoadingSpinner;
  className?: string;
}

const defaultClassName = "calendly-inline-widget";

class InlineWidget extends React.Component<Props, { isLoading: boolean }> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: true,
    };

    this.onLoad = this.onLoad.bind(this);
  }

  private onLoad() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const src = formatCalendlyUrl({
      url: this.props.url,
      pageSettings: this.props.pageSettings,
      prefill: this.props.prefill,
      utm: this.props.utm,
      embedType: "Inline",
    });
    const LoadingSpinner = this.props.LoadingSpinner || CalendlyLoadingSpinner;

    return (
      <div
        className={this.props.className || defaultClassName}
        style={this.props.styles || {}}
      >
        {this.state.isLoading && <LoadingSpinner />}
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title={this.props.iframeTitle || "Calendly Scheduling Page"}
          onLoad={this.onLoad}
          src={src}
        ></iframe>
      </div>
    );
  }
}

export default InlineWidget;

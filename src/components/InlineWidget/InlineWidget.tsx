import * as React from "react";
import { loadScript } from "../../calendly";
import { CALENDLY_SCRIPT_SOURCE } from "../../constants";

export interface Props {
  url: string;
  styles?: React.CSSProperties | undefined;
}

const defaultStyles = {
  minWidth: "320px",
  height: "630px",
};

export class InlineWidget extends React.Component<Props> {
  private readonly widgetParentContainerRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.widgetParentContainerRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_SOURCE}"]`)) {
      loadScript();
    } else {
      window.Calendly.initInlineWidget({
        url: this.props.url,
        parentElement: this.widgetParentContainerRef.current!
      })
    }
  }

  render() {
    return (
      <div
        className="calendly-inline-widget"
        style={this.props.styles || defaultStyles}
        data-url={this.props.url}
        ref={this.widgetParentContainerRef}
      ></div>
    );
  }
}

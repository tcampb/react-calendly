import * as React from "react";
import { loadScript } from "../../calendly";

export interface Props {
  url: string;
  styles?: React.CSSProperties | undefined;
}

const defaultStyles = {
  minWidth: "320px",
  height: "630px",
};

class InlineWidget extends React.Component<Props> {
  private readonly widgetParentContainerRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.widgetParentContainerRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    loadScript();
    window.Calendly.initInlineWidget({
      url: this.props.url,
      parentElement: this.widgetParentContainerRef.current!,
    });
  }

  render() {
    return (
      <div
        className="calendly-inline-widget"
        style={this.props.styles || defaultStyles}
        ref={this.widgetParentContainerRef}
        data-auto-load="false"
      ></div>
    );
  }
}

export default InlineWidget;

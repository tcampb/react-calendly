import * as React from "react";
import { loadScript } from "../../calendly";
import { Prefill, Utm } from "../../calendly";

export interface Props {
  url: string;
  prefill?: Prefill;
  utm?: Utm;
  styles?: React.CSSProperties | undefined;
}

export interface InlineWidgetOptions {
  url: string;
  parentElement: HTMLElement;
  prefill?: Prefill;
  utm?: Utm;
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
    this.destroyInlineWidget = this.destroyInlineWidget.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.destroyInlineWidget();
    window.Calendly.initInlineWidget({
      url: nextProps.url,
      parentElement: this.widgetParentContainerRef.current!,
      prefill: nextProps.prefill,
      utm: nextProps.utm,
    });
  }

  componentDidMount() {
    loadScript();
    window.Calendly.initInlineWidget({
      url: this.props.url,
      parentElement: this.widgetParentContainerRef.current!,
      prefill: this.props.prefill,
      utm: this.props.utm,
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

  private destroyInlineWidget() {
    this.widgetParentContainerRef.current!.innerHTML = "";
  }
}

export default InlineWidget;

import * as React from "react";
import {
  loadScript,
  PageSettings,
  withPageSettings,
  Prefill,
  Utm,
  loadStyleSheet,
} from "../../calendly";

export interface Props {
  url: string;
  prefill?: Prefill;
  utm?: Utm;
  styles?: React.CSSProperties | undefined;
  pageSettings?: PageSettings;
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

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.url !== this.props.url
      || prevProps.pageSettings !== this.props.pageSettings
      || prevProps.prefill !== this.props.prefill
      || prevProps.utm !== this.props.utm
    ) {
      this.destroyInlineWidget();
      window.Calendly.initInlineWidget({
        url: withPageSettings(this.props.url, this.props.pageSettings),
        parentElement: this.widgetParentContainerRef.current!,
        prefill: this.props.prefill,
        utm: this.props.utm,
      });
    }
  }

  componentDidMount() {
    loadScript();
    loadStyleSheet();
    window.Calendly.initInlineWidget({
      url: withPageSettings(this.props.url, this.props.pageSettings),
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

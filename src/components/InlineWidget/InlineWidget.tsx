import * as React from "react";
import { loadScript } from "../../calendly";
import { CALENDLY_SCRIPT_SOURCE } from "../../constants";
import { Prefill } from "../../calendly";

export interface Props {
  url: string;
  prefill?: Prefill;
  styles?: React.CSSProperties | undefined;
}

export interface InlineWidgetOptions {
  url: string;
  parentElement: HTMLElement;
  prefill?: Prefill;
}

const defaultStyles = {
  minWidth: "320px",
  height: "630px",
};

const initWidget = (options: InlineWidgetOptions) => {
  window.Calendly.initInlineWidget(options);
};

export class InlineWidget extends React.Component<Props> {
  private readonly widgetParentContainerRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.widgetParentContainerRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    const widgetOptions: InlineWidgetOptions = {
      url: this.props.url,
      parentElement: this.widgetParentContainerRef.current!,
      prefill: this.props.prefill,
    };

    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_SOURCE}"]`)) {
      return loadScript(() => initWidget(widgetOptions));
    }

    initWidget(widgetOptions);
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

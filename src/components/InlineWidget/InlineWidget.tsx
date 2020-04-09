import * as React from "react";
import { loadScript } from "../../calendly";
import { CALENDLY_SCRIPT_SOURCE } from "../../constants";

export interface Props {
  url: string;
  prefill?: Prefill;
  styles?: React.CSSProperties | undefined;
}

type Optional<T extends object> = {
  [P in keyof T]?: T[P];
};

type Prefill = Optional<{
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  customAnswers: Optional<{
    a1: string;
    a2: string;
    a3: string;
    a4: string;
    a5: string;
    a6: string;
    a7: string;
    a8: string;
    a9: string;
    a10: string;
  }>;
}>;

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
        data-url={this.props.url}
        ref={this.widgetParentContainerRef}
        data-auto-load="false"
      ></div>
    );
  }
}

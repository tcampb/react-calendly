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
    this.getChildNodeCount = this.getChildNodeCount.bind(this);
    this.shouldWidgetUpdate = this.shouldWidgetUpdate.bind(this);
    this.initWidget = this.initWidget.bind(this);
  }

  componentDidUpdate(prevProps: Props) {
    const shouldUpdate = this.shouldWidgetUpdate(prevProps);
    if (shouldUpdate) {
      /*
       * If the Calendly Inline Widget (.calendly-spinner and iframe) has not
       * yet been added to the DOM then we need to wait for the widget to be inserted
       * prior to updating the component.
       *
       * Fixes https://github.com/tcampb/react-calendly/issues/25
       */
      if (!this.getChildNodeCount()) {
        this.calendlyWidgetListener("inserted", () => {
          this.calendlyWidgetListener("removed", this.initWidget);
          this.destroyInlineWidget();
        });
      } else {
        this.destroyInlineWidget();
        this.initWidget();
      }
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

  private getChildNodeCount() {
    return this.widgetParentContainerRef.current!.childNodes.length;
  }

  private initWidget() {
    window.Calendly.initInlineWidget({
      url: withPageSettings(this.props.url, this.props.pageSettings),
      parentElement: this.widgetParentContainerRef.current!,
      prefill: this.props.prefill,
      utm: this.props.utm,
    });
  }

  private calendlyWidgetListener(
    event: "inserted" | "removed",
    callback: () => void
  ) {
    const isInsertedEvent = event === "inserted";
    const isRemovedEvent = event === "removed";
    return new MutationObserver((mutationsList, observer) => {
      if (isInsertedEvent) {
        const nodesAdded = mutationsList.some(
          (record) => !!record.addedNodes.length
        );

        if (nodesAdded) callback();
      }

      if (isRemovedEvent) {
        const nodesRemoved = mutationsList.some(
          (record) => !!record.removedNodes.length
        );

        if (nodesRemoved) callback();
      }

      observer.disconnect();
    }).observe(this.widgetParentContainerRef.current!, {
      childList: true,
    });
  }

  private shouldWidgetUpdate(prevProps: Props) {
    return (
      prevProps.url !== this.props.url ||
      prevProps.pageSettings !== this.props.pageSettings ||
      prevProps.prefill !== this.props.prefill ||
      prevProps.utm !== this.props.utm
    );
  }
}

export default InlineWidget;

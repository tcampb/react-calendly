import * as React from "react";
import { loadScript } from "../../calendly";
import { CALENDLY_SCRIPT_SOURCE } from "../../constants";

export interface Props {
  url: string;
  styles?: React.CSSProperties | undefined;
  fullname: string;
  firstname: string;
  lastname: string;
  email: string;
}

const defaultStyles = {
  minWidth: "320px",
  height: "630px",
};

export class InlineWidget extends React.Component<Props> {
  private readonly widgetParentContainerRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    console.log("props", props)
    super(props);
    this.widgetParentContainerRef = React.createRef<HTMLDivElement>();
  }

  createURL() {
    return `${this.props.url}?${this.props.fullname != null ? `name=${this.props.fullname}&` : ""}${this.props.firstname != null ? `first_name=${this.props.firstname}&` : ""}${this.props.lastname != null ? `last_name=${this.props.lastname}&` : ""}${this.props.email != null ? `email=${this.props.email}` : ""}`
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
        data-url={this.createURL()}
        ref={this.widgetParentContainerRef}
        data-fullname={this.props.fullname}
        data-firstname={this.props.firstname}
        data-lastname={this.props.lastname}
        data-email={this.props.email}
      ></div>
    );
  }
}

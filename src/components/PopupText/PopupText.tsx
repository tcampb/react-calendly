import * as React from "react";
import { loadScript, loadStyleSheet } from "../../calendly";
import {
  CALENDLY_SCRIPT_SOURCE,
  CALENDLY_STYLESHEET_SOURCE,
} from "../../constants";


export interface Props {
  url: string;
  text: string;
  prefill?: Prefill;
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

export interface PopupWidgetOptions {
  url: string;
  prefill?: Prefill;
}

const initWidget = (options: PopupWidgetOptions) => {
  window.Calendly.initPopupWidget(options);
};


const createClickHandler = (widgetOptions: PopupWidgetOptions) => (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  e.preventDefault();
  return initWidget({
    url: widgetOptions.url,
    prefill: widgetOptions.prefill
  });
};

export class PopupText extends React.Component<Props> {
  componentDidMount() {



    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_SOURCE}"]`)) {
      loadScript();
    }
    if (!document.querySelector(`link[href="${CALENDLY_STYLESHEET_SOURCE}"]`)) {
      loadStyleSheet();
    }
  }

  componentWillUnmount() {
    window.Calendly.closePopupWidget();
  }

  render() {
    const widgetOptions: PopupWidgetOptions = {
      url: this.props.url,
      prefill: this.props.prefill,
    }
    return (
      <a href="" onClick={createClickHandler(widgetOptions)}>
        {this.props.text}
      </a>
    );
  }
}

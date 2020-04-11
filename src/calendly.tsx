import * as React from "react";
import { Props as BadgeWidgetOptions } from "./components/PopupWidget/PopupWidget";
import initializeCalendly from "./calendly-widget";

export interface ICalendly {
  initInlineWidget(options: { url: string; parentElement: HTMLElement }): void;
  showPopupWidget(url: string): void;
  closePopupWidget(): void;
  destroyBadgeWidget(): void;
  initBadgeWidget(opts: BadgeWidgetOptions): void;
  initPopupWidget(opts: { url: string }): void;
}

declare global {
  interface Window {
    Calendly: ICalendly;
  }
}

export const withCalendly = function <P>(Component: React.ComponentType<P>) {
  if (!window.Calendly) {
    initializeCalendly();
  }

  return (props: P) => <Component {...props} />;
};

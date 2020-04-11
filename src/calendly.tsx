import { Props as BadgeWidgetOptions } from "./components/PopupWidget/PopupWidget";
import initializeCalendly from "./calendly-widget";
import { CALENDLY_STYLESHEET_SOURCE } from "./constants";

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

export const loadScript = () => {
  if (!window.Calendly) {
    initializeCalendly();
  }
};

export const loadStyleSheet = () => {
  if (!document.querySelector(`link[href="${CALENDLY_STYLESHEET_SOURCE}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_STYLESHEET_SOURCE;
    document.body.appendChild(link);
  }
};

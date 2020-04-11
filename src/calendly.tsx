import { Props as BadgeWidgetOptions } from "./components/PopupWidget/PopupWidget";
import {
  CALENDLY_SCRIPT_SOURCE,
  CALENDLY_STYLESHEET_SOURCE,
} from "./constants";
import { InlineWidgetOptions } from "./components/InlineWidget/InlineWidget";
import { PopupWidgetOptions } from "./components/PopupText/PopupText";

export interface ICalendly {
  initInlineWidget(options: InlineWidgetOptions): void;
  showPopupWidget(url: string): void;
  closePopupWidget(): void;
  destroyBadgeWidget(): void;
  initBadgeWidget(options: BadgeWidgetOptions): void;
  initPopupWidget(options: PopupWidgetOptions): void;
}

declare global {
  interface Window {
    Calendly: ICalendly;
  }
}

type Optional<T extends object> = {
  [P in keyof T]?: T[P];
};

export type Prefill = Optional<{
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

export const loadScript = (onLoad?: () => void) => {
  const script = document.createElement("script");
  script.src = CALENDLY_SCRIPT_SOURCE;
  script.onload = onLoad || (() => null);

  document.body.appendChild(script);
};

export const loadStyleSheet = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_STYLESHEET_SOURCE;
  document.body.appendChild(link);
};

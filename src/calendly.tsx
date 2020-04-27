import { Props as BadgeWidgetOptions } from "./components/PopupWidget/PopupWidget";
import initializeCalendly from "./calendly-widget";
import { CALENDLY_STYLESHEET_SOURCE } from "./constants";

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

export enum CalendlyEvent {
  PROFILE_PAGE_VIEWED = "calendly.profile_page_viewed",
  EVENT_TYPE_VIEWED = "calendly.event_type_viewed",
  DATE_AND_TIME_SELECTED = "calendly.date_and_time_selected",
  EVENT_SCHEDULED = "calendly.event_scheduled",
}

export type Utm = Optional<{
  utmCampaign: string;
  utmSource: string;
  utmMedium: string;
  utmContent: string;
  utmTerm: string;
}>;

export type PageSettings = Optional<{
  /**
   * @description Use this setting to hide your profile picture, name, event duration, location, and description when Calendly is embedded. This will help reduce duplicate information that you may already have on your web page.
   * @see {@link https://help.calendly.com/hc/en-us/articles/360020052833-Advanced-embed-options#2} for further information.
   */
  hideLandingPageDetails: boolean;
  /**
   * @description Use this setting to hide your profile picture, name, event duration, location, and description when Calendly is embedded. This will help reduce duplicate information that you may already have on your web page.
   * @see {@link https://help.calendly.com/hc/en-us/articles/360020052833-Advanced-embed-options#2} for further information.
   */
  hideEventTypeDetails: boolean;
  /**
   * @description This setting is only available for Calendly users on the Pro plan. Use this setting to change your Calendly scheduling page's background color.
   * @example 00a2ff
   * @see {@link https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview#3} for further information.
   */
  backgroundColor: string;
  /**
   * @description This setting is only available for Calendly users on the Pro plan. Use this setting to change your Calendly scheduling page's text color.
   * @example ffffff
   * @see {@link https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview#3} for further information.
   */
  textColor: string;
  /**
   * @description This setting is only available for Calendly users on the Pro plan. Use this setting to change your Calendly scheduling page's primary color.
   * @example 4d5055
   * @see {@link https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview#3} for further information.
   */
  primaryColor: string;
}>;

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

export const withPageSettings = (url: string, pageSettings?: PageSettings) => {
  if (!pageSettings) return url;

  const {
    backgroundColor,
    hideEventTypeDetails,
    hideLandingPageDetails,
    primaryColor,
    textColor,
  } = pageSettings;

  const queryStringIndex = url.indexOf("?");
  const hasQueryString = queryStringIndex > -1;
  const queryString = url.slice(queryStringIndex + 1);
  const baseUrl = hasQueryString ? url.slice(0, queryStringIndex) : url;

  const updatedQueryString = [
    queryString,
    backgroundColor ? `background_color=${backgroundColor}` : null,
    hideEventTypeDetails ? `hide_event_type_details=1` : null,
    hideLandingPageDetails ? `hide_landing_page_details=1` : null,
    primaryColor ? `primary_color=${primaryColor}` : null,
    textColor ? `text_color=${textColor}` : null,
  ]
    .filter((item) => item !== null)
    .join("&");

  return `${baseUrl}?${updatedQueryString}`;
};

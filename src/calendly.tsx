import { sanitizePageSettingsProps } from "./helpers/propHelpers";

type Optional<T extends object> = {
  [P in keyof T]?: T[P];
};

export type Prefill = Optional<{
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  smsReminderNumber: string;
  location: string;
  guests: string[];
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
  date: Date;
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
  salesforce_uuid: string;
}>;

/**
 * @description The default title is Calendly Scheduling Page
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title}
 */
export type IframeTitle = string;

/**
 * @description LoadingSpinner is a React component that will be displayed while the Calendly iframe is loading. If no component is provided, the default Calendly loading spinner will be used.
 */
export type LoadingSpinner = React.FunctionComponent;

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
  /**
   * @description The General Data Protection Regulation governs data protection in the EU and EEA. Certain Calendly integrations require access to cookies with user information. If you do not embed the GDPR banner, users in those areas will not have the ability to give their consent in order to access integrations such as Google Analytics, Facebook Pixel, PayPal, and Stripe.
   * @see {@link https://help.calendly.com/hc/en-us/articles/360007385493-Cookie-FAQs} for further information.
   */
  hideGdprBanner: boolean;
}>;

export const formatCalendlyUrl = ({
  url,
  prefill = {},
  pageSettings = {},
  utm = {},
  embedType,
}: {
  url: string;
  prefill?: Prefill;
  pageSettings?: PageSettings;
  utm?: Utm;
  embedType?: "Inline" | "PopupWidget" | "PopupButton";
}) => {
  const sanitizedPageSettings = sanitizePageSettingsProps(pageSettings);

  const {
    backgroundColor,
    hideEventTypeDetails,
    hideLandingPageDetails,
    primaryColor,
    textColor,
    hideGdprBanner,
  } = sanitizedPageSettings

  const {
    customAnswers,
    date,
    email,
    firstName,
    guests,
    lastName,
    location,
    smsReminderNumber,
    name,
  } = prefill;

  const {
    utmCampaign,
    utmContent,
    utmMedium,
    utmSource,
    utmTerm,
    salesforce_uuid,
  } = utm;

  const queryStringIndex = url.indexOf("?");
  const hasQueryString = queryStringIndex > -1;
  const queryString = url.slice(queryStringIndex + 1);
  const baseUrl = hasQueryString ? url.slice(0, queryStringIndex) : url;

  const updatedQueryString = [
    hasQueryString ? queryString : null,
    backgroundColor ? `background_color=${backgroundColor}` : null,
    hideEventTypeDetails ? `hide_event_type_details=1` : null,
    hideLandingPageDetails ? `hide_landing_page_details=1` : null,
    primaryColor ? `primary_color=${primaryColor}` : null,
    textColor ? `text_color=${textColor}` : null,
    hideGdprBanner ? `hide_gdpr_banner=1` : null,
    name ? `name=${encodeURIComponent(name)}` : null,
    smsReminderNumber ? `phone_number=${encodeURIComponent(smsReminderNumber)}` : null,
    location ? `location=${encodeURIComponent(location)}` : null,
    firstName ? `first_name=${encodeURIComponent(firstName)}` : null,
    lastName ? `last_name=${encodeURIComponent(lastName)}` : null,
    guests ? `guests=${guests.map(encodeURIComponent).join(",")}` : null,
    email ? `email=${encodeURIComponent(email)}` : null,
    date && date instanceof Date ? `date=${formatDate(date)}` : null,
    utmCampaign ? `utm_campaign=${encodeURIComponent(utmCampaign)}` : null,
    utmContent ? `utm_content=${encodeURIComponent(utmContent)}` : null,
    utmMedium ? `utm_medium=${encodeURIComponent(utmMedium)}` : null,
    utmSource ? `utm_source=${encodeURIComponent(utmSource)}` : null,
    utmTerm ? `utm_term=${encodeURIComponent(utmTerm)}` : null,
    salesforce_uuid
      ? `salesforce_uuid=${encodeURIComponent(salesforce_uuid)}`
      : null,
    embedType ? `embed_type=${embedType}` : null,
    /*
     * https://github.com/tcampb/react-calendly/pull/31
     * embed_domain must be defined to receive messages from the Calendly iframe.
     */
    `embed_domain=1`,
  ]
    .concat(customAnswers ? formatCustomAnswers(customAnswers) : [])
    .filter((item) => item !== null)
    .join("&");

  return `${baseUrl}?${updatedQueryString}`;
};

const formatDate = (d: Date) => {
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();

  return [
    year,
    month < 10 ? `0${month}` : month,
    day < 10 ? `0${day}` : day,
  ].join("-");
};

const CUSTOM_ANSWER_PATTERN = /^a\d{1,2}$/;
const formatCustomAnswers = (customAnswers: object) => {
  const customAnswersFiltered = Object.keys(customAnswers).filter((key) =>
    key.match(CUSTOM_ANSWER_PATTERN)
  );

  if (!customAnswersFiltered.length) return [];

  return customAnswersFiltered.map(
    (key) => `${key}=${encodeURIComponent(customAnswers[key])}`
  );
};

import * as React from "react";
import { CalendlyEvent } from "../../calendly";

export type DateAndTimeSelectedEvent = MessageEvent<{
  event: CalendlyEvent.DATE_AND_TIME_SELECTED;
  payload: {};
}>;

export type EventScheduledEvent = MessageEvent<{
  event: CalendlyEvent.EVENT_SCHEDULED;
  payload: {
    event: {
      /**
       * @description Canonical reference (unique identifier) to the event that was scheduled.
       * @example https://calendly.com/api/v2/scheduled_events/AAAAAAAAAAAAAA
       * @see {@link https://developer.calendly.com/docs/api-docs/reference/calendly-api/openapi.yaml/paths/~1scheduled_events~1%7Buuid%7D/get} for further information.
       */
      uri: string;
    };
    invitee: {
      /**
       * @description Canonical reference (unique identifier) for the invitee who scheduled the event.
       * @example https://calendly.com/api/v2/scheduled_events/AAAAAAAAAAAAAA/invitees/AAAAAAAAAAAAAA
       * @see {@link https://developer.calendly.com/docs/api-docs/reference/calendly-api/openapi.yaml/paths/~1scheduled_events~1%7Bevent_uuid%7D~1invitees~1%7Binvitee_uuid%7D/get} for further information.
       */
      uri: string;
    };
  };
}>;

export type EventTypeViewedEvent = MessageEvent<{
  event: CalendlyEvent.EVENT_TYPE_VIEWED;
  payload: {};
}>;

export type ProfilePageViewedEvent = MessageEvent<{
  event: CalendlyEvent.PROFILE_PAGE_VIEWED;
  payload: {};
}>;

export type CalendlyEventHandlers = {
  onDateAndTimeSelected?: (e: DateAndTimeSelectedEvent) => any;
  onEventScheduled?: (e: EventScheduledEvent) => any;
  onEventTypeViewed?: (e: EventTypeViewedEvent) => any;
  onProfilePageViewed?: (e: ProfilePageViewedEvent) => any;
};

const EVENT_NAME = "message";

export default function useCalendlyEventListener(
  eventHandlers: CalendlyEventHandlers
) {
  const {
    onDateAndTimeSelected,
    onEventScheduled,
    onEventTypeViewed,
    onProfilePageViewed,
  } = eventHandlers || {};

  React.useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const eventName = e.data.event;

      if (eventName === CalendlyEvent.DATE_AND_TIME_SELECTED) {
        onDateAndTimeSelected && onDateAndTimeSelected(e);
      } else if (eventName === CalendlyEvent.EVENT_SCHEDULED) {
        onEventScheduled && onEventScheduled(e);
      } else if (eventName === CalendlyEvent.EVENT_TYPE_VIEWED) {
        onEventTypeViewed && onEventTypeViewed(e);
      } else if (eventName === CalendlyEvent.PROFILE_PAGE_VIEWED) {
        onProfilePageViewed && onProfilePageViewed(e);
      }
    };

    window.addEventListener(EVENT_NAME, onMessage);

    return function cleanup() {
      window.removeEventListener(EVENT_NAME, onMessage);
    };
  }, [eventHandlers]);
}

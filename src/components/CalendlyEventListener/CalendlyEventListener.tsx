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

type Props = {
  onDateAndTimeSelected?: (e: DateAndTimeSelectedEvent) => any;
  onEventScheduled?: (e: EventScheduledEvent) => any;
  onEventTypeViewed?: (e: EventTypeViewedEvent) => any;
  onProfilePageViewed?: (e: ProfilePageViewedEvent) => any;
};

class CalendlyEventListener extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {
    window.addEventListener("message", this.handleEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.handleEvent);
  }

  private handleEvent(e: MessageEvent) {
    const eventName = e.data.event;

    if (eventName === CalendlyEvent.DATE_AND_TIME_SELECTED) {
      this.props.onDateAndTimeSelected && this.props.onDateAndTimeSelected(e);
    } else if (eventName === CalendlyEvent.EVENT_SCHEDULED) {
      this.props.onEventScheduled && this.props.onEventScheduled(e);
    } else if (eventName === CalendlyEvent.EVENT_TYPE_VIEWED) {
      this.props.onEventTypeViewed && this.props.onEventTypeViewed(e);
    } else if (eventName === CalendlyEvent.PROFILE_PAGE_VIEWED) {
      this.props.onProfilePageViewed && this.props.onProfilePageViewed(e);
    }
  }

  render() {
    return this.props.children || null;
  }
}

export default CalendlyEventListener;

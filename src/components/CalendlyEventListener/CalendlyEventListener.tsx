import * as React from "react";
import { CalendlyEvent } from "../../calendly";

type DateAndTimeSelectedEvent = MessageEvent<{
  event: CalendlyEvent.DATE_AND_TIME_SELECTED;
  payload: {};
}>;

type EventScheduledEvent = MessageEvent<{
  event: CalendlyEvent.EVENT_SCHEDULED;
  payload: {
    event: {
      uri: string;
    };
    invitee: {
      uri: string;
    };
  };
}>;

type EventTypeViewedEvent = MessageEvent<{
  event: CalendlyEvent.EVENT_TYPE_VIEWED;
  payload: {};
}>;

type ProfilePageViewedEvent = MessageEvent<{
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
    return this.props.children;
  }
}

export default CalendlyEventListener;

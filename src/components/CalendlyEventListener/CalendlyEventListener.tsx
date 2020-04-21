import * as React from "react";
import { CalendlyEvent } from "../../calendly";

type CalendlyEventMessage = MessageEvent & {
  data: { event: CalendlyEvent };
};

type Props = {
  onDateAndTimeSelected?: (e: CalendlyEventMessage) => any;
  onEventScheduled?: (e: CalendlyEventMessage) => any;
  onEventTypeViewed?: (e: CalendlyEventMessage) => any;
  onProfilePageViewed?: (e: CalendlyEventMessage) => any;
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

import * as React from "react";
import "./styles.css";
const {
  withKnobs,
  text,
  boolean,
  object,
  color,
} = require("@storybook/addon-knobs");

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import InlineWidget from "../InlineWidget/InlineWidget";
import PopupButton from "../PopupButton/PopupButton";
import PopupWidget from "../PopupWidget/PopupWidget";
import PopupModal from "../PopupModal/Modal";
import useCalendlyEventListener from "../hooks/useCalendlyEventListener";
import { PageSettings, Utm, Prefill } from "../../calendly";

const prefill: Prefill = {
  name: "Jon Snow",
  firstName: "Jon",
  lastName: "Snow",
  email: "test@test.com",
  guests: ["janedoe@example.com", "johndoe@example.com"],
  customAnswers: {
    a1: "a1",
    a2: "a2",
    a3: "a3",
    a4: "a4",
    a5: "a5",
    a6: "a6",
    a7: "a7",
    a8: "a8",
    a9: "a9",
    a10: "a10",
  },
  date: new Date(Date.now() + 86400000),
};

const utm: Utm = {
  utmCampaign: "Spring Sale 2019",
  utmSource: "Facebook",
  utmMedium: "Ad",
  utmContent: "Shoe and Shirts",
  utmTerm: "Spring",
  salesforce_uuid: "0038b00002ePOyABCD",
};

const pageSettings: PageSettings = {
  backgroundColor: "ffffff",
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: "00a2ff",
  textColor: "4d5055",
  hideGdprBanner: true,
};

const pageSettingsWithHexCodes: PageSettings = {
  backgroundColor: "#333",
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: "#FF0000",
  textColor: "#FF0000",
  hideGdprBanner: true,
};

storiesOf("Components", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add("InlineWidget", () => (
    <InlineWidget
      url={text("url", "https://calendly.com/acmesales")}
      styles={object("styles", {
        height: "1000px",
      })}
      prefill={object("prefill", prefill)}
      utm={object("utm", utm)}
      pageSettings={object("pageSettings", pageSettings)}
      iframeTitle={text("iframeTitle", "Calendly Scheduling Page")}
    />
  ))
  .add("InlineWidgetWithHexCodes", () => (
    <InlineWidget
      url={text("url", "https://calendly.com/acmesales")}
      styles={object("styles", {
        height: "1000px",
      })}
      prefill={object("prefill", prefill)}
      utm={object("utm", utm)}
      pageSettings={object("pageSettings", pageSettingsWithHexCodes)}
      iframeTitle={text("iframeTitle", "Calendly Scheduling Page")}
    />
  ))
  .add("PopupButton", () => (
    <PopupButton
      url={text("url", "https://calendly.com/acmesales")}
      text={text("text", "Click here to schedule!")}
      prefill={object("prefill", prefill)}
      utm={object("utm", utm)}
      pageSettings={object("pageSettings", pageSettings)}
      styles={object("styles", {})}
      className={text("className", "")}
      iframeTitle={text("iframeTitle", "Calendly Scheduling Page")}
      rootElement={document.getElementById("root")!}
    />
  ))
  .add("PopupWithHexCodes", () => (
    <PopupButton
      url={text("url", "https://calendly.com/acmesales")}
      text={text("text", "Click here to schedule!")}
      prefill={object("prefill", prefill)}
      utm={object("utm", utm)}
      pageSettings={object("pageSettings", pageSettingsWithHexCodes)}
      styles={object("styles", {})}
      className={text("className", "")}
      iframeTitle={text("iframeTitle", "Calendly Scheduling Page")}
      rootElement={document.getElementById("root")!}
    />
  ))
  .add("PopupWidget", () => (
    <PopupWidget
      url={text("url", "https://calendly.com/acmesales")}
      text={text("text", "Click here to schedule!")}
      color={color("color", "#00a2ff")}
      textColor={color("textColor", "#ffffff")}
      branding={boolean("branding", true)}
      prefill={object("prefill", prefill)}
      utm={object("utm", utm)}
      pageSettings={object("pageSettings", pageSettings)}
      iframeTitle={text("iframeTitle", "Calendly Scheduling Page")}
      rootElement={document.getElementById("root")!}
    />
  ))
  .add("Custom Button", () => {
    class CustomButtonExample extends React.Component {
      state = {
        isOpen: false,
      };

      render() {
        return (
          <div>
            <h4 style={{ textAlign: "center" }}>
              {" "}
              Use the <code>PopupModal</code> component to create a custom
              button that will open the pop-up scheduler when clicked.
            </h4>
            <button
              style={{ display: "block", margin: "0 auto" }}
              onClick={() => this.setState({ isOpen: true })}
            >
              Custom Button
            </button>
            <PopupModal
              url={text("url", "https://calendly.com/acmesales")}
              pageSettings={object("pageSettings", pageSettings)}
              utm={object("utm", utm)}
              prefill={object("prefill", prefill)}
              iframeTitle={text("iframeTitle", "Calendly Scheduling Page")}
              onModalClose={() => this.setState({ isOpen: false })}
              open={this.state.isOpen}
              rootElement={document.getElementById("root")!}
            />
          </div>
        );
      }
    }

    return <CustomButtonExample />;
  })
  .add("useCalendlyEventListener", () => {
    const eventId = "calendly-event";
    const instructions =
      "The embedded scheduling page notifies the parent window of important events during the booking flow. " +
      "Interact with the Calendly iframe below to trigger different Calendly events. " +
      `A full list of available Calendly events can be found `;

    const calendlyEventHandler = (e: any) => {
      document.getElementById(eventId)!.innerText = JSON.stringify(e.data);
    };

    useCalendlyEventListener({
      onDateAndTimeSelected: calendlyEventHandler,
      onEventScheduled: calendlyEventHandler,
      onEventTypeViewed: calendlyEventHandler,
      onProfilePageViewed: calendlyEventHandler,
    });

    return (
      <>
        <div style={{ textAlign: "center", width: "60%", margin: "0 auto" }}>
          <h4>
            {instructions}
            <a
              href={
                "https://help.calendly.com/hc/en-us/articles/360020052833-Advanced-embed-options#3"
              }
              target="_blank"
            >
              here
            </a>
            {
              ". You must specify your host in the iframe's src with the embed_domain parameter."
            }
          </h4>
          <div>
            Calendly Event: <span id={eventId}></span>
          </div>
        </div>
        <div
          style={{
            minWidth: "320px",
            height: "630px",
          }}
        >
          <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            src={`https://calendly.com/acmesales?embed_domain=${document.location.host}&embed_type=Inline`}
          />
        </div>
      </>
    );
  });

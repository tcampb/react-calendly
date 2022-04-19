# react-calendly

[Calendly integration](https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview) for React apps

[![NPM](https://img.shields.io/npm/v/react-calendly.svg)](https://www.npmjs.com/package/react-calendly) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://tcampb.github.io/react-calendly)

---

<img width="1402" alt="react-calendly" src="https://user-images.githubusercontent.com/33756113/128376592-3cef4ef7-5c8b-4a07-a360-d83da17fff1d.png">

## Installation

Depending on the package manager you are using for your project, use `npm install` or `yarn add` to include react-calendly in your react app.

```bash
npm install --save react-calendly
```

```bash
yarn add react-calendly
```

## Documentation

### Basic Usage

Ensure that React has been included into your page or component. Then, you can import any of the following components from the "react-calendly" package:

- [InlineWidget](https://tcampb.github.io/react-calendly/?path=/story/components--inlinewidget)
- [PopupWidget](https://tcampb.github.io/react-calendly/?path=/story/components--popupwidget)
- [PopupButton](https://tcampb.github.io/react-calendly/?path=/story/components--popupbutton)
- [Custom Button](https://tcampb.github.io/react-calendly/?path=/story/components--custom-button)
- [useCalendlyEventListener](https://tcampb.github.io/react-calendly/?path=/story/components--usecalendlyeventlistener)

#### InlineWidget

```jsx
import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
    </div>
  );
};

export default App;
```

#### PopupWidget

```jsx
import React from "react";
import { PopupWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/your_scheduling_page"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
  );
};

export default App;
```

#### PopupButton

```jsx
import React from "react";
import { PopupButton } from "react-calendly";

const App = () => {
  return (
    <div className="App">
      <PopupButton
        url="https://calendly.com/your_scheduling_page"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />
    </div>
  );
};

export default App;
```

### Advanced Usage

You can also take advantage of using optional props on the component(s) such as including a defined height, color customization options (available on Pro plan only), utm parameters, pre-filling custom questions, etc. Here are the optional props you can use with the inline embed:

#### Inline Embed Height

```jsx
styles={{
  height: '1000px'
}}
```

#### Page Settings

```jsx
pageSettings={{
  backgroundColor: 'ffffff',
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: '00a2ff',
  textColor: '4d5055'
}}
```

#### Prefill Values

```jsx
prefill={{
  email: 'test@test.com',
  firstName: 'Jon',
  lastName: 'Snow',
  name: 'Jon Snow',
  guests: [
    'janedoe@example.com',
    'johndoe@example.com'
  ],
  customAnswers: {
    a1: 'a1',
    a2: 'a2',
    a3: 'a3',
    a4: 'a4',
    a5: 'a5',
    a6: 'a6',
    a7: 'a7',
    a8: 'a8',
    a9: 'a9',
    a10: 'a10'
  },
  date: new Date(Date.now() + 86400000)
}}
```

#### UTM Parameters

```jsx
utm={{
  utmCampaign: 'Spring Sale 2019',
  utmContent: 'Shoe and Shirts',
  utmMedium: 'Ad',
  utmSource: 'Facebook',
  utmTerm: 'Spring'
}}
```

## FAQ

#### Why are my page settings not working?

For the page settings to work, you'll need to pass in a `url` prop that is associated with a Calendly account on the [Pro plan](https://calendly.com/pages/pricing).

#### How do I create a custom button that triggers a pop-up scheduler?

```tsx
import { PopupModal } from "react-calendly";

class CustomButtonExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <button
          style={{ display: "block", margin: "0 auto" }}
          onClick={() => this.setState({ isOpen: true })}
        >
          Custom Button
        </button>
        <PopupModal
          url="https://calendly.com/acmesales"
          pageSettings={this.props.pageSettings}
          utm={this.props.utm}
          prefill={this.props.prefill}
          onModalClose={() => this.setState({ isOpen: false })}
          open={this.state.isOpen}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
        />
      </div>
    );
  }
}
```

#### How can I access the event details when an event is scheduled?

The [useCalendlyEventListener](https://tcampb.github.io/react-calendly/?path=/story/components--usecalendlyeventlistener) `onEventScheduled` prop receives an event with the following data structure:

```javascript
{
  event: "calendly.event_scheduled",
  payload: {
    event: {
      uri: "https://calendly.com/api/v2/scheduled_events/AAAAAAAAAAAAAA"
    },
    invitee: {
      uri: "https://calendly.com/api/v2/scheduled_events/AAAAAAAAAAAAAA/invitees/AAAAAAAAAAAAAA"
    }
  }
}
```

If you are using [Calendly's v2 api](https://developer.calendly.com/docs/api-docs/docs/A-API-Getting-Started.md) you can reference the event/invitee URIs included in the event payload to retrieve additional information about the event and/or invitee record.

- [Scheduled Event Schema](https://developer.calendly.com/docs/api-docs/reference/calendly-api/openapi.yaml/paths/~1scheduled_events~1%7Buuid%7D/get)
- [Invitee Schema](https://developer.calendly.com/docs/api-docs/reference/calendly-api/openapi.yaml/paths/~1scheduled_events~1%7Bevent_uuid%7D~1invitees~1%7Binvitee_uuid%7D/get)

## Additional Resources

[Embed options overview](https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview)

[Advanced embed options](https://help.calendly.com/hc/en-us/articles/360020052833-Advanced-embed-options)

[Common embed questions](https://help.calendly.com/hc/en-us/articles/360019861794-Common-embed-questions)

## License

MIT © [tcampb](https://github.com/tcampb)

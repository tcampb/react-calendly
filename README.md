# react-calendly

> [Calendly integration](https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview) for React apps

[![NPM](https://img.shields.io/npm/v/react-calendly.svg)](https://www.npmjs.com/package/react-calendly) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-calendly
```

## Documentation

https://tcampb.github.io/react-calendly

## FAQ

#### Why are my page settings not working?

For the page settings to work, you'll need to pass in a `url` prop that is associated with a Calendly account on the [Pro plan](https://calendly.com/pages/pricing).

#### How do I create a custom button that triggers a pop-up scheduler?

`react-calendly` provides an `openPopupWidget` function that can be used to trigger the pop-up scheduler.

```tsx
import { openPopupWidget } from 'react-calendly';

const CustomButton = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return <button onClick={onClick}>Custom Button</button>
}
```

## Additional Resources
[Embed options overview](https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview)

[Advanced embed options](https://help.calendly.com/hc/en-us/articles/360020052833-Advanced-embed-options)

[Common embed questions](https://help.calendly.com/hc/en-us/articles/360019861794-Common-embed-questions)

## License

MIT © [tcampb](https://github.com/tcampb)

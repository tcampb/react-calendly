# react-calendly

> [Calendly integration](https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview) for React apps

[![NPM](https://img.shields.io/npm/v/react-calendly.svg)](https://www.npmjs.com/package/react-calendly) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-calendly
```

## Usage

### Components

- Inline
- PopupText
- PopupWidget

#### Inline

| Property | Type                | Required | Default                                |
| -------- | ------------------- | -------- | -------------------------------------- |
| url      | string              | true     | -                                      |
| styles   | React.CSSProperties | false    | { minWidth: "320px", height: "630px" } |

#### PopupText

| Property | Type   | Required | Default |
| -------- | ------ | -------- | ------- |
| url      | string | true     | -       |
| text     | string | true     | -       |

#### PopupWidget

| Property  | Type    | Required | Default |
| --------- | ------- | -------- | ------- |
| url       | string  | true     | -       |
| text      | string  | true     | -       |
| color     | string  | false    | #00a2ff |
| textColor | string  | false    | #ffffff |
| branding  | boolean | false    | false   |

## License

MIT © [tcampb](https://github.com/tcampb)

# Changelog

## 4.1.1
- `PopupWidget`, `PopupModal`, and `PopupButton` components will throw an error when opened without a `rootElement` prop (https://github.com/tcampb/react-calendly/issues/143).

## 4.1.0

- Added `salesforce_uuid` prefill option (https://github.com/tcampb/react-calendly/pull/128).

## 4.0.1

- Fixed issue that caused the `email` and `guests` prefill options to not be properly encoded (https://github.com/tcampb/react-calendly/issues/116).

## 4.0.0

- Replaced `CalendlyEventListener` component with `useCalendlyEventListener` hook (https://github.com/tcampb/react-calendly/issues/45).
- Updated `react` & `react-dom` peer dependency versions; `react-calendly@4.0.0` now requires react and react-dom version >=16.8.

## 3.0.3

- Supports new React 18 types (https://github.com/tcampb/react-calendly/pull/111).
- Allows closing modal with an overlay click (https://github.com/tcampb/react-calendly/pull/110).

## 3.0.2

- Adds React v18 support (https://github.com/tcampb/react-calendly/issues/106).

## 3.0.1

- Fixes uri encoding bug (https://github.com/tcampb/react-calendly/pull/102).

## 3.0.0

- Removes Calendly widget script dependency (https://assets.calendly.com/assets/external/widget.js).
- Removes `openPopupWidget` and `closePopupWidget` functions (replaced by `PopupModal` component).
- Adds `PopupModal` component.

## 2.2.3

- [#96] Added title attribute to the Calendly scheduling page iframe.

## 2.2.2

- [#88] Fixed bug that caused the loading spinner to remain on the page even after the Calendly widget had finished loading.

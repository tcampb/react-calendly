# Changelog

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

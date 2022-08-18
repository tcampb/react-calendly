'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDom = require('react-dom');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}";
styleInject(css);

var CalendlyEvent;
(function (CalendlyEvent) {
    CalendlyEvent["PROFILE_PAGE_VIEWED"] = "calendly.profile_page_viewed";
    CalendlyEvent["EVENT_TYPE_VIEWED"] = "calendly.event_type_viewed";
    CalendlyEvent["DATE_AND_TIME_SELECTED"] = "calendly.date_and_time_selected";
    CalendlyEvent["EVENT_SCHEDULED"] = "calendly.event_scheduled";
})(CalendlyEvent || (CalendlyEvent = {}));
var formatCalendlyUrl = function (_a) {
    var url = _a.url, _b = _a.prefill, prefill = _b === void 0 ? {} : _b, _c = _a.pageSettings, pageSettings = _c === void 0 ? {} : _c, _d = _a.utm, utm = _d === void 0 ? {} : _d, embedType = _a.embedType;
    var backgroundColor = pageSettings.backgroundColor, hideEventTypeDetails = pageSettings.hideEventTypeDetails, hideLandingPageDetails = pageSettings.hideLandingPageDetails, primaryColor = pageSettings.primaryColor, textColor = pageSettings.textColor, hideGdprBanner = pageSettings.hideGdprBanner;
    var customAnswers = prefill.customAnswers, date = prefill.date, email = prefill.email, firstName = prefill.firstName, guests = prefill.guests, lastName = prefill.lastName, location = prefill.location, name = prefill.name;
    var utmCampaign = utm.utmCampaign, utmContent = utm.utmContent, utmMedium = utm.utmMedium, utmSource = utm.utmSource, utmTerm = utm.utmTerm, salesforce_uuid = utm.salesforce_uuid;
    var queryStringIndex = url.indexOf("?");
    var hasQueryString = queryStringIndex > -1;
    var queryString = url.slice(queryStringIndex + 1);
    var baseUrl = hasQueryString ? url.slice(0, queryStringIndex) : url;
    var updatedQueryString = [
        hasQueryString ? queryString : null,
        backgroundColor ? "background_color=" + backgroundColor : null,
        hideEventTypeDetails ? "hide_event_type_details=1" : null,
        hideLandingPageDetails ? "hide_landing_page_details=1" : null,
        primaryColor ? "primary_color=" + primaryColor : null,
        textColor ? "text_color=" + textColor : null,
        hideGdprBanner ? "hide_gdpr_banner=1" : null,
        name ? "name=" + encodeURIComponent(name) : null,
        location ? "location=" + encodeURIComponent(location) : null,
        firstName ? "first_name=" + encodeURIComponent(firstName) : null,
        lastName ? "last_name=" + encodeURIComponent(lastName) : null,
        guests ? "guests=" + guests.map(encodeURIComponent).join(",") : null,
        email ? "email=" + encodeURIComponent(email) : null,
        date && date instanceof Date ? "date=" + formatDate(date) : null,
        utmCampaign ? "utm_campaign=" + encodeURIComponent(utmCampaign) : null,
        utmContent ? "utm_content=" + encodeURIComponent(utmContent) : null,
        utmMedium ? "utm_medium=" + encodeURIComponent(utmMedium) : null,
        utmSource ? "utm_source=" + encodeURIComponent(utmSource) : null,
        utmTerm ? "utm_term=" + encodeURIComponent(utmTerm) : null,
        salesforce_uuid ? "salesforce_uuid=" + encodeURIComponent(salesforce_uuid) : null,
        embedType ? "embed_type=" + embedType : null,
        /*
         * https://github.com/tcampb/react-calendly/pull/31
         * embed_domain must be defined to receive messages from the Calendly iframe.
         */
        "embed_domain=1",
    ]
        .concat(customAnswers ? formatCustomAnswers(customAnswers) : [])
        .filter(function (item) { return item !== null; })
        .join("&");
    return baseUrl + "?" + updatedQueryString;
};
var formatDate = function (d) {
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    return [
        year,
        month < 10 ? "0" + month : month,
        day < 10 ? "0" + day : day,
    ].join("-");
};
var CUSTOM_ANSWER_PATTERN = /^a\d{1,2}$/;
var formatCustomAnswers = function (customAnswers) {
    var customAnswersFiltered = Object.keys(customAnswers).filter(function (key) {
        return key.match(CUSTOM_ANSWER_PATTERN);
    });
    if (!customAnswersFiltered.length)
        return [];
    return customAnswersFiltered.map(function (key) { return key + "=" + encodeURIComponent(customAnswers[key]); });
};

var LoadingSpinner = /** @class */ (function (_super) {
    __extends(LoadingSpinner, _super);
    function LoadingSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingSpinner.prototype.render = function () {
        return (React.createElement("div", { className: "calendly-spinner" },
            React.createElement("div", { className: "calendly-bounce1" }),
            React.createElement("div", { className: "calendly-bounce2" }),
            React.createElement("div", { className: "calendly-bounce3" })));
    };
    return LoadingSpinner;
}(React.Component));

var defaultStyles = {
    minWidth: "320px",
    height: "630px",
};
var InlineWidget = /** @class */ (function (_super) {
    __extends(InlineWidget, _super);
    function InlineWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true,
        };
        _this.onLoad = _this.onLoad.bind(_this);
        return _this;
    }
    InlineWidget.prototype.onLoad = function () {
        this.setState({
            isLoading: false,
        });
    };
    InlineWidget.prototype.render = function () {
        var src = formatCalendlyUrl({
            url: this.props.url,
            pageSettings: this.props.pageSettings,
            prefill: this.props.prefill,
            utm: this.props.utm,
            embedType: "Inline",
        });
        return (React.createElement("div", { className: "calendly-inline-widget", style: this.props.styles || defaultStyles },
            this.state.isLoading && React.createElement(LoadingSpinner, null),
            React.createElement("iframe", { width: "100%", height: "100%", frameBorder: "0", title: this.props.iframeTitle || "Calendly Scheduling Page", onLoad: this.onLoad, src: src })));
    };
    return InlineWidget;
}(React.Component));

var ModalContent = /** @class */ (function (_super) {
    __extends(ModalContent, _super);
    function ModalContent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true,
        };
        _this.onLoad = _this.onLoad.bind(_this);
        return _this;
    }
    ModalContent.prototype.onLoad = function () {
        this.setState({
            isLoading: false,
        });
    };
    ModalContent.prototype.render = function () {
        var src = formatCalendlyUrl({
            url: this.props.url,
            pageSettings: this.props.pageSettings,
            prefill: this.props.prefill,
            utm: this.props.utm,
            embedType: "PopupWidget",
        });
        return (React.createElement(React.Fragment, null,
            this.state.isLoading && React.createElement(LoadingSpinner, null),
            React.createElement("iframe", { width: "100%", height: "100%", frameBorder: "0", title: this.props.iframeTitle || "Calendly Scheduling Page", onLoad: this.onLoad, src: src })));
    };
    return ModalContent;
}(React.Component));

var Modal = (function (props) {
    if (!props.open)
        return null;
    return ReactDom.createPortal(React.createElement("div", { className: "calendly-overlay" },
        React.createElement("div", { onClick: props.onModalClose, className: "calendly-close-overlay" }),
        React.createElement("div", { className: "calendly-popup" },
            React.createElement("div", { className: "calendly-popup-content" },
                React.createElement(ModalContent, __assign({}, props)))),
        React.createElement("button", { className: "calendly-popup-close", onClick: props.onModalClose, "aria-label": "Close modal", style: {
                display: "block",
                border: "none",
                padding: 0,
            } })), props.rootElement);
});

var PopupButton = /** @class */ (function (_super) {
    __extends(PopupButton, _super);
    function PopupButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false,
        };
        _this.onClick = _this.onClick.bind(_this);
        _this.onClose = _this.onClose.bind(_this);
        return _this;
    }
    PopupButton.prototype.onClick = function (e) {
        e.preventDefault();
        this.setState({
            isOpen: true,
        });
    };
    PopupButton.prototype.onClose = function (e) {
        e.stopPropagation();
        this.setState({
            isOpen: false,
        });
    };
    PopupButton.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("button", { onClick: this.onClick, style: this.props.styles || {}, className: this.props.className || "" }, this.props.text),
            React.createElement(Modal, __assign({}, this.props, { open: this.state.isOpen, onModalClose: this.onClose, rootElement: this.props.rootElement }))));
    };
    return PopupButton;
}(React.Component));

var PopupWidget = /** @class */ (function (_super) {
    __extends(PopupWidget, _super);
    function PopupWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false,
        };
        _this.onClick = _this.onClick.bind(_this);
        _this.onClose = _this.onClose.bind(_this);
        return _this;
    }
    PopupWidget.prototype.onClick = function () {
        this.setState({
            isOpen: true,
        });
    };
    PopupWidget.prototype.onClose = function (e) {
        e.stopPropagation();
        this.setState({
            isOpen: false,
        });
    };
    PopupWidget.prototype.render = function () {
        return (React.createElement("div", { className: "calendly-badge-widget", onClick: this.onClick },
            React.createElement("div", { className: "calendly-badge-content", style: {
                    background: this.props.color || "#00a2ff",
                    color: this.props.textColor || "#ffffff",
                } },
                this.props.text || "Schedule time with me",
                this.props.branding && React.createElement("span", null, "powered by Calendly")),
            React.createElement(Modal, __assign({}, this.props, { open: this.state.isOpen, onModalClose: this.onClose, rootElement: this.props.rootElement }))));
    };
    return PopupWidget;
}(React.Component));

var EVENT_NAME = "message";
function useCalendlyEventListener(eventHandlers) {
    var _a = eventHandlers || {}, onDateAndTimeSelected = _a.onDateAndTimeSelected, onEventScheduled = _a.onEventScheduled, onEventTypeViewed = _a.onEventTypeViewed, onProfilePageViewed = _a.onProfilePageViewed;
    React.useEffect(function () {
        var onMessage = function (e) {
            var eventName = e.data.event;
            if (eventName === CalendlyEvent.DATE_AND_TIME_SELECTED) {
                onDateAndTimeSelected && onDateAndTimeSelected(e);
            }
            else if (eventName === CalendlyEvent.EVENT_SCHEDULED) {
                onEventScheduled && onEventScheduled(e);
            }
            else if (eventName === CalendlyEvent.EVENT_TYPE_VIEWED) {
                onEventTypeViewed && onEventTypeViewed(e);
            }
            else if (eventName === CalendlyEvent.PROFILE_PAGE_VIEWED) {
                onProfilePageViewed && onProfilePageViewed(e);
            }
        };
        window.addEventListener(EVENT_NAME, onMessage);
        return function cleanup() {
            window.removeEventListener(EVENT_NAME, onMessage);
        };
    }, [eventHandlers]);
}

exports.InlineWidget = InlineWidget;
exports.PopupButton = PopupButton;
exports.PopupWidget = PopupWidget;
exports.PopupModal = Modal;
exports.useCalendlyEventListener = useCalendlyEventListener;
//# sourceMappingURL=index.js.map

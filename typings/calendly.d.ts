import { Props as BadgeWidgetOptions } from "./components/PopupWidget/PopupWidget";
import { InlineWidgetOptions } from "./components/InlineWidget/InlineWidget";
import { PopupWidgetOptions } from "./components/PopupText/PopupText";
export interface ICalendly {
    initInlineWidget(options: InlineWidgetOptions): void;
    showPopupWidget(url: string): void;
    closePopupWidget(): void;
    destroyBadgeWidget(): void;
    initBadgeWidget(opts: BadgeWidgetOptions): void;
    initPopupWidget(options: PopupWidgetOptions): void;
}
declare global {
    interface Window {
        Calendly: ICalendly;
    }
}
export declare const loadScript: (onLoad?: (() => void) | undefined) => void;
export declare const loadStyleSheet: () => void;

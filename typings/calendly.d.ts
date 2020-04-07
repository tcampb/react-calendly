import { Props as BadgeWidgetOptions } from "./components/PopupWidget/PopupWidget";
export interface ICalendly {
    initInlineWidget(options: {
        url: string;
        parentElement: HTMLElement;
    }): void;
    showPopupWidget(url: string): void;
    closePopupWidget(): void;
    destroyBadgeWidget(): void;
    initBadgeWidget(opts: BadgeWidgetOptions): void;
    initPopupWidget(opts: {
        url: string;
    }): void;
}
declare global {
    interface Window {
        Calendly: ICalendly;
    }
}
export declare const loadScript: (onLoad?: (() => void) | undefined) => void;
export declare const loadStyleSheet: () => void;

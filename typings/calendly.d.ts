import { Props as BadgeWidgetOptions } from "./components/PopupWidget/PopupWidget";
import { InlineWidgetOptions } from "./components/InlineWidget/InlineWidget";
import { PopupWidgetOptions } from "./components/PopupText/PopupText";
export interface ICalendly {
    initInlineWidget(options: InlineWidgetOptions): void;
    showPopupWidget(url: string): void;
    closePopupWidget(): void;
    destroyBadgeWidget(): void;
    initBadgeWidget(options: BadgeWidgetOptions): void;
    initPopupWidget(options: PopupWidgetOptions): void;
}
declare global {
    interface Window {
        Calendly: ICalendly;
    }
}
declare type Optional<T extends object> = {
    [P in keyof T]?: T[P];
};
export declare type Prefill = Optional<{
    name: string;
    email: string;
    firstName: string;
    lastName: string;
    customAnswers: Optional<{
        a1: string;
        a2: string;
        a3: string;
        a4: string;
        a5: string;
        a6: string;
        a7: string;
        a8: string;
        a9: string;
        a10: string;
    }>;
}>;
export declare const loadScript: (onLoad?: (() => void) | undefined) => void;
export declare const loadStyleSheet: () => void;
export {};

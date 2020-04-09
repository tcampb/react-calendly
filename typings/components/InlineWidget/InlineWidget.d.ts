import * as React from "react";
export interface Props {
    url: string;
    prefill?: Prefill;
    styles?: React.CSSProperties | undefined;
}
declare type Optional<T extends object> = {
    [P in keyof T]?: T[P];
};
declare type Prefill = Optional<{
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
export interface InlineWidgetOptions {
    url: string;
    parentElement: HTMLElement;
    prefill?: Prefill;
}
export declare class InlineWidget extends React.Component<Props> {
    private readonly widgetParentContainerRef;
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};

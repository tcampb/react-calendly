import * as React from "react";
import { Prefill } from "../../calendly";
export interface Props {
    url: string;
    prefill?: Prefill;
    styles?: React.CSSProperties | undefined;
}
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

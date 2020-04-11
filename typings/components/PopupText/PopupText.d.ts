import * as React from "react";
import { Prefill } from "../../calendly";
export interface Props {
    url: string;
    text: string;
    prefill?: Prefill;
}
export interface PopupWidgetOptions {
    url: string;
    prefill?: Prefill;
}
export declare class PopupText extends React.Component<Props> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}

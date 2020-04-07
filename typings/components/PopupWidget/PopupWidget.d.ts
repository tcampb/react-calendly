import * as React from "react";
export interface Props {
    url: string;
    text: string;
    color?: string;
    textColor?: string;
    branding?: boolean;
}
export declare class PopupWidget extends React.Component<Props> {
    componentWillReceiveProps(nextProps: Props): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}

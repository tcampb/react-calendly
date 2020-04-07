import * as React from "react";
export interface Props {
    url: string;
    text: string;
}
export declare class PopupText extends React.Component<Props> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}

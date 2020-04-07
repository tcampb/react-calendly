import * as React from "react";
export interface Props {
    url: string;
    styles?: React.CSSProperties | undefined;
    fullname: string;
    firstname: string;
    lastname: string;
    email: string;
}
export declare class InlineWidget extends React.Component<Props> {
    private readonly widgetParentContainerRef;
    constructor(props: Props);
    createURL(): string;
    componentDidMount(): void;
    render(): JSX.Element;
}

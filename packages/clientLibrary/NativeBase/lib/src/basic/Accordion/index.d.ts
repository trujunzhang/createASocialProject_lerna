import * as React from 'react';
import { AccordionProps } from './Accordion';
export declare class Accordion extends React.Component<AccordionProps, any> {
    state: {
        selected: undefined;
    };
    setSelected(index: any): void;
    componentDidMount(): void;
    render(): JSX.Element;
}

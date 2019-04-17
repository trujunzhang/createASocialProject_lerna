import React from 'react';
export declare class DatePicker extends React.Component<any, any> {
    static defaultProps: {
        disabled: boolean;
    };
    private _root;
    constructor(props: any);
    setDate(date: any): void;
    showDatePicker(): void;
    openAndroidDatePicker(): Promise<void>;
    formatChosenDate(date: any): any;
    render(): JSX.Element;
}

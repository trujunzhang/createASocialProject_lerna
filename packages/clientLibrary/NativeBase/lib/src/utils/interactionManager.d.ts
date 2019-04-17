/// <reference types="react-native" />
declare const _default: {
    runAfterInteractions: (f: any) => void;
    Events: {
        interactionStart: string;
        interactionComplete: string;
    };
    createInteractionHandle(): number;
    clearInteractionHandle(handle: number): void;
    setDeadline(deadline: number): void;
    addListener(eventType: string, listener: (...args: any[]) => any, context?: any): import("react-native").EmitterSubscription;
};
export default _default;

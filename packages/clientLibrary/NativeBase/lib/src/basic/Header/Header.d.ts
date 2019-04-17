import { RnViewStyleProp, RnStatusBarStyleProp } from '@appUtils/rnCommonProps';
/**
 * see Widget Header.js
 */
export interface HeaderProps {
    /**
     * Prop to be used with <Header> component to have Search bar onto the Header section of your screen.
     */
    searchBar?: boolean;
    /**
     * Wraps the search bar with predefined border options.
     * Default: regular
     */
    rounded?: boolean;
    style?: RnViewStyleProp | Array<RnViewStyleProp>;
    /**
     * It is advisable to use hasTabs prop with Header while using Tab
     */
    hasTabs?: boolean;
    noShadow?: boolean;
    hasSubtitle?: boolean;
    span?: boolean;
    androidStatusBarColor?: string;
    iosBarStyle?: RnStatusBarStyleProp;
    hasSegment?: boolean;
    translucent?: boolean;
    transparent?: boolean;
    noLeft?: boolean;
    noStatusBar?: boolean;
    parallax?: boolean;
}

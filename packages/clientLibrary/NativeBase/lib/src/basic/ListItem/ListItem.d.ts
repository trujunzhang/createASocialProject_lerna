import { ReactNative, RnViewStyleProp } from '@appUtils/rnCommonProps';
/**
 * see Widget ListItem.js
 */
export interface ListItemProps extends ReactNative.TouchableOpacityProps {
    header?: boolean;
    noBorder?: boolean;
    noIndent?: boolean;
    /**
     * Aligns icon to the right of ListItem.
     * Default: false
     */
    iconRight?: boolean;
    /**
     * Aligns icon to the left of ListItem.
     * Default: true
     */
    iconLeft?: boolean;
    icon?: boolean;
    avatar?: boolean;
    thumbnail?: boolean;
    button?: boolean;
    /**
     * Helps to organize and group the list items.
     */
    itemDivider?: boolean;
    /**
     * Sub caption for List Item.
     */
    note?: string;
    itemHeader?: boolean;
    first?: boolean;
    last?: boolean;
    selected?: boolean;
    /**
     * [android] colored ripple effect
     */
    androidRippleColor?: string;
    touchableHighlightStyle?: RnViewStyleProp;
    full?: boolean;
}

import { PixelRatio } from 'react-primitives';
import { platform, deviceWidth, deviceHeight } from '../../utils';
export const otherVariables = {
    // Other
    borderRadiusBase: platform === 'ios' ? 5 : 2,
    borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    contentPadding: 10,
    dropdownLinkColor: '#414142',
    inputLineHeight: 24,
    deviceWidth,
    deviceHeight,
    inputGroupRoundedBorderRadius: 30
};
//# sourceMappingURL=Other.js.map
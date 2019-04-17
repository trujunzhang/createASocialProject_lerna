import { nbToolbarIcons } from '@app/tools';
export const getToolbarNormalParams = (params) => {
    const { navigation, title, subTitle, renderLeft, leftIcons, rightIcons, onToolbarIconsPressed, renderCenter, visible } = params;
    const pageToolbarParams = {
        visible,
        leftElement: {
            icons: leftIcons,
            renderLeft
        },
        centerElement: {
            renderCenter,
            titleObject: {
                title,
                subTitle
            }
        },
        rightElement: {
            icons: rightIcons
        },
        onToolbarIconsPressed: (icon) => {
            // debugger
            if (!!onToolbarIconsPressed) {
                onToolbarIconsPressed(icon);
            }
            switch (icon.iconType) {
                case nbToolbarIcons.ICONS_LEFT_DISMISS: {
                    if (!!navigation) {
                        navigation.dismiss();
                    }
                    break;
                }
                case nbToolbarIcons.ICONS_LEFT_BACK: {
                    if (!!navigation) {
                        navigation.goBack();
                    }
                    break;
                }
            }
        }
    };
    return pageToolbarParams;
};
//# sourceMappingURL=toolbarNormalParams.js.map
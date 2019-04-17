import { nbToolbarIcons } from '@app/tools';
export class HomeToolbarParams {
    constructor(params) {
        this.onToolbarIconsPressed = (icon) => {
            const { navigation, onToolbarIconsRightPressed } = this.params;
            switch (icon.iconType) {
                case nbToolbarIcons.ICONS_LEFT_BACK: {
                    navigation.goBack();
                    break;
                }
                default: {
                    onToolbarIconsRightPressed(icon);
                    break;
                }
            }
        };
        this.params = params;
    }
    getLeftElement() {
        const { renderLeft } = this.params;
        if (!!renderLeft) {
            return {
                renderLeft
            };
        }
        return {
            icons: [
                {
                    iconName: 'arrow-back',
                    iconType: nbToolbarIcons.ICONS_LEFT_BACK
                }
            ]
        };
    }
    getParams() {
        const { onSearchSubmitEditing, rightIcons } = this.params;
        const toolbarParams = {
            leftElement: this.getLeftElement(),
            headerStyle: {
            // backgroundColor: 'black'
            },
            leftStyle: {
            // width: 44,
            // backgroundColor: 'yellow'
            },
            centerStyle: {
                height: 30
                // backgroundColor: 'blue'
            },
            rightStyle: {
            // width: rightElementItems.length * 44,
            // backgroundColor: 'orange'
            },
            centerElement: {
                searchBarObject: {
                    onSearchSubmitEditing
                }
            },
            rightElement: {
                icons: rightIcons
            },
            onToolbarIconsPressed: this.onToolbarIconsPressed
        };
        return toolbarParams;
    }
}
//# sourceMappingURL=homeToolbarParams.js.map
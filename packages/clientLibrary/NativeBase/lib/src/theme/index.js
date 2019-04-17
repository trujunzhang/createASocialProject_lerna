import { LodashUtils as _ } from '@app/tools';
import { bodyTheme, leftTheme, rightTheme, headerTheme, switchTheme, thumbnailTheme, containerTheme, contentTheme, buttonTheme, titleTheme, subtitleTheme, inputGroupTheme, badgeTheme, checkBoxTheme, cardTheme, radioTheme, h3Theme, h2Theme, h1Theme, footerTheme, footerTabTheme, fabTheme, itemTheme, labelTheme, textAreaTheme, textTheme, toastTheme, tabTheme, tabBarTheme, tabContainerTheme, viewTheme, tabHeadingTheme, iconTheme, inputTheme, swipeRowTheme, segmentTheme, spinnerTheme, cardItemTheme, listItemTheme, formTheme, separatorTheme, pickerTheme } from './components';
export const getThemeStyle = (variables) => {
    const nbTheme = {
        'NativeBase.Left': {
            ...leftTheme(variables)
        },
        'NativeBase.Right': {
            ...rightTheme(variables)
        },
        'NativeBase.Body': {
            ...bodyTheme(variables)
        },
        'NativeBase.Header': {
            ...headerTheme(variables)
        },
        'NativeBase.Button': {
            ...buttonTheme(variables)
        },
        'NativeBase.Title': {
            ...titleTheme(variables)
        },
        'NativeBase.Subtitle': {
            ...subtitleTheme(variables)
        },
        'NativeBase.InputGroup': {
            ...inputGroupTheme(variables)
        },
        'NativeBase.Input': {
            ...inputTheme(variables)
        },
        'NativeBase.Badge': {
            ...badgeTheme(variables)
        },
        'NativeBase.CheckBox': {
            ...checkBoxTheme(variables)
        },
        'NativeBase.Radio': {
            ...radioTheme(variables)
        },
        'NativeBase.Card': {
            ...cardTheme(variables)
        },
        'NativeBase.CardItem': {
            ...cardItemTheme(variables)
        },
        'NativeBase.Toast': {
            ...toastTheme(variables)
        },
        'NativeBase.H1': {
            ...h1Theme(variables)
        },
        'NativeBase.H2': {
            ...h2Theme(variables)
        },
        'NativeBase.H3': {
            ...h3Theme(variables)
        },
        'NativeBase.Form': {
            ...formTheme(variables)
        },
        'NativeBase.Container': {
            ...containerTheme(variables)
        },
        'NativeBase.Content': {
            ...contentTheme(variables)
        },
        'NativeBase.Footer': {
            ...footerTheme(variables)
        },
        'NativeBase.Tabs': {
            flex: 1
        },
        'NativeBase.FooterTab': {
            ...footerTabTheme(variables)
        },
        'NativeBase.ListItem': {
            ...listItemTheme(variables)
        },
        'NativeBase.ListItem1': {
            ...listItemTheme(variables)
        },
        'NativeBase.Icon': {
            ...iconTheme(variables)
        },
        'NativeBase.IconNB': {
            ...iconTheme(variables)
        },
        'NativeBase.Text': {
            ...textTheme(variables)
        },
        'NativeBase.Spinner': {
            ...spinnerTheme(variables)
        },
        'NativeBase.Fab': {
            ...fabTheme(variables)
        },
        'NativeBase.Item': {
            ...itemTheme(variables)
        },
        'NativeBase.Label': {
            ...labelTheme(variables)
        },
        'NativeBase.Textarea': {
            ...textAreaTheme(variables)
        },
        'NativeBase.PickerNB': {
            ...pickerTheme(variables),
            'NativeBase.Button': {
                'NativeBase.Text': {}
            }
        },
        'NativeBase.Tab': {
            ...tabTheme(variables)
        },
        'NativeBase.Segment': {
            ...segmentTheme(variables)
        },
        'NativeBase.TabBar': {
            ...tabBarTheme(variables)
        },
        'NativeBase.ViewNB': {
            ...viewTheme(variables)
        },
        'NativeBase.TabHeading': {
            ...tabHeadingTheme(variables)
        },
        'NativeBase.TabContainer': {
            ...tabContainerTheme(variables)
        },
        'NativeBase.Switch': {
            ...switchTheme(variables)
        },
        'NativeBase.Separator': {
            ...separatorTheme(variables)
        },
        'NativeBase.SwipeRow': {
            ...swipeRowTheme(variables)
        },
        'NativeBase.Thumbnail': {
            ...thumbnailTheme(variables)
        }
    };
    const cssifyTheme = (grandparent, parent, parentKey) => {
        _.forEach(parent, (style, styleName) => {
            // console.log('styleName', styleName);
            // console.log('parentKey', parentKey);
            if (styleName.indexOf('.') === 0 && parentKey && parentKey.indexOf('.') === 0) {
                if (grandparent) {
                    if (!grandparent[styleName]) {
                        grandparent[styleName] = {};
                    }
                    else {
                        grandparent[styleName][parentKey] = style;
                    }
                }
            }
            if (style &&
                typeof style === 'object' &&
                styleName !== 'fontVariant' &&
                styleName !== 'transform') {
                cssifyTheme(parent, style, styleName);
            }
        });
    };
    const theme = Object.assign({
        variables
    }, nbTheme);
    cssifyTheme(null, theme, null);
    return theme;
};
//# sourceMappingURL=index.js.map
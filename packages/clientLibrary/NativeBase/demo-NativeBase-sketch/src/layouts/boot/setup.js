import * as React from 'react';
import { StyleProvider } from '@app/native-base';
import { getThemeStyle } from '@app/native-base';
import { generatorForMaterialThemeVariables, ProximaFontFamily, AppVectorIcons } from '@app/native-base'; // variables
const currentFontFamily = ProximaFontFamily;
// const currentFontFamily = RobotoFontFamily
const themeDefaultVariables = {
    iconFamily: AppVectorIcons.platformOS,
    // iconFamily: 'MaterialIcons',
    fontFamily: currentFontFamily.family,
    btnFontFamily: currentFontFamily.fontFace.medium,
    titleFontfamily: currentFontFamily.fontFace.medium
};
export const sketchAppVariables = generatorForMaterialThemeVariables();
const appStyles = getThemeStyle(sketchAppVariables);
export class Setup extends React.Component {
    render() {
        // return null
        return React.createElement(StyleProvider, { style: appStyles }, this.props.children);
    }
}
//# sourceMappingURL=setup.js.map
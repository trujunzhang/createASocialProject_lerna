import { commonColorThemeDefaultVariables } from './commonColorVariables';
import { commonColorThemeVariables } from './commonColorThemeVariables';
export const generatorForCommonColorThemeVariables = (themeDefaultVariables) => {
    const nextAppThemeVariables = commonColorThemeVariables;
    const variableWithIcons = nextAppThemeVariables;
    const defaultVariables = themeDefaultVariables || commonColorThemeDefaultVariables;
    return {
        ...variableWithIcons,
        ...defaultVariables
    };
};
//# sourceMappingURL=generator.js.map
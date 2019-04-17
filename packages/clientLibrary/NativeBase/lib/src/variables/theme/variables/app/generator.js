import { appThemeDefaultVariables } from './appVariables';
import { appThemeVariables } from './appThemeVariables';
export const generatorForAppThemeVariables = (themeDefaultVariables) => {
    const nextAppThemeVariables = appThemeVariables;
    const variableWithIcons = nextAppThemeVariables;
    const defaultVariables = themeDefaultVariables || appThemeDefaultVariables;
    const variables = {
        ...variableWithIcons,
        ...defaultVariables
    };
    return variables;
};
//# sourceMappingURL=generator.js.map
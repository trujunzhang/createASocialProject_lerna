import { platformThemeDefaultVariables } from './platformVariables';
import { platformThemeVariables } from './platformThemeVariables';
export const generatorForPlatformThemeVariables = (themeDefaultVariables) => {
    const nextAppThemeVariables = platformThemeVariables;
    const variableWithIcons = nextAppThemeVariables;
    const defaultVariables = themeDefaultVariables || platformThemeDefaultVariables;
    return {
        ...variableWithIcons,
        ...defaultVariables
    };
};
//# sourceMappingURL=generator.js.map
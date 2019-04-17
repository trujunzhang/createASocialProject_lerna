import { materialThemeDefaultVariables } from './materialVariables';
import { materialThemeVariables } from './materialThemeVariables';
export const generatorForMaterialThemeVariables = (themeDefaultVariables) => {
    const nextAppThemeVariables = materialThemeVariables;
    const variableWithIcons = nextAppThemeVariables;
    const defaultVariables = themeDefaultVariables || materialThemeDefaultVariables;
    return {
        ...variableWithIcons,
        ...defaultVariables
    };
};
//# sourceMappingURL=generator.js.map
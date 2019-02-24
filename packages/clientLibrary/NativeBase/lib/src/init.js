import { Theme } from "@app/native-base-shoutem-theme";
import getThemeStyle from "./theme/components";

export default function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}

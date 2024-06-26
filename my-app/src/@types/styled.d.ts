import "styled-components";
import { lightTheme } from "../styles/themes/light";

type ThemeType = typeof lightTheme;

declare module "styled-components" {
  export interface LightTheme extends ThemeType {}
}

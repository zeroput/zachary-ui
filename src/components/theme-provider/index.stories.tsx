import ThemeProvider from ".";
import { ThemeProviderProps } from ".";

export default {
  title: "My/Theme Provider",
  component: ThemeProvider
}


export const Basic = {
  args: {
    primaryColor: "#c88137"
  }
} as { args: ThemeProviderProps }


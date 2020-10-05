import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    background: {
      default: "#212121",
    },
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#9ccc65",
    },
    secondary: {
      light: "#bef67a",
      main: "#8bc34a",
      dark: "#5a9216",
      contrastText: "#eeeeee",
    },
  },
});

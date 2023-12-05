import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors, responsiveFontSizes } from "@mui/material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { CssBaseline } from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: colors.blue[600],
      },
      secondary: {
        main: colors.purple[600],
      },
    },
  })
);

type ThemeType = {
  children: ReactJSXElement;
};

const Theme = ({ children }: ThemeType) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

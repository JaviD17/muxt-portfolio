import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
    // mode: 'dark'
    // #6C63FF is the HEX color of the svg about section
  },
});

theme = responsiveFontSizes(theme);

export default theme;
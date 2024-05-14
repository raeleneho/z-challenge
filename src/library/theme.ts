import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0370ce",
      light: "#e8f2fb",
    },
    secondary: {
      main: "#545859",
      light: "#8B8A88",
    },
  },
  typography: {
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      letterSpacing: "0.5px",
    },

    h6: {
      fontSize: "1.2rem",
      fontWeight: 380,
      letterSpacing: "0.6px",
    },
  },
});

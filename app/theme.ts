import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#102634",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#319FD4",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f2f5f8",
      paper: "#ffffff",
    },
    success: {
      main: "#4caf50",
    },
    warning: {
      main: "#ff9800",
    },
    error: {
      main: "#f44336",
    },

    info: {
      main: "#4e8098",
    },
    text: {
      primary: "#333333",
      secondary: "#8F95B2",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          transition: "300ms ease-in-out",
          backgroundColor: "#102634",
          "&:hover": {
            backgroundColor: "#18304a",
          },
          "&.MuiButton-secondary": {
            backgroundColor: "#319FD4",
            "&:hover": {
              backgroundColor: "#2a8dc7",
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#102634",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f2f5f8",
          color: "#333333",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "5px 0",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: "3rem",
          borderRadius: "5px",
          padding: "10px",
          border: "1px solid #d1d5db",
        },
      },
    },
  },
});

export default theme;

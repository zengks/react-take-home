import { createTheme } from "@mui/material/styles";

import colors from "./colors";

const mui = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      primary: colors.textLight,
      secondary: colors.textDark,
    },
  },
  typography: {
    fontFamily: "ProximaNova, Helvetica, Arial, serif",
    h1: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "2.8rem",
      color: colors.textLight,
      lineHeight: 1,
      letterSpacing: "-1px",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "1.8rem",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "-0.75px",
    },
    h3: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "1.6rem",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "-1px",
    },
    h4: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "1.4rem",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "-1px",
    },
    h6: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: ".8rem",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "3px",
    },
    body1: {
      color: colors.textLight,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: "1rem",
      color: colors.textLight,
    },
    caption: {
      fontWeight: 500,
      letterSpacing: "1px",
      fontSize: "0.6rem",
      lineHeight: 1,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.textLight,
          textDecoration: 'none',
          '&:hover': {
            color: colors.primary
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          paddingTop: "80px",
          background: colors.secondaryVariant2,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: `1px solid ${colors.secondaryVariant1}`,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 80,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: colors.secondaryVariant1,
          padding: "8px",
          color: colors.textLight,
        },
        icon: {
          color: colors.primary,
        },
        filled: {
          color: colors.secondary,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.secondary,
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.6rem",
          fontWeight: "bold",
          borderRadius: "30px",
          letterSpacing: "1px",
          padding: "0 30px",
          height: '2.8rem',
        },
        outlinedPrimary: {
          borderWidth: "2px",
          color: colors.primary,
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
  },
});

export default mui;

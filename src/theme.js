import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
        },
        primary: {
          100: "#e3d1f0",
          200: "#c79fe0",
          300: "#ab6dd1",
          400: "#8f3bc1",
          500: "#52057B",
          600: "#440462",
          700: "#360349",
          800: "#280230",
          900: "#1a0117",
        },
        greenAccent: {
          100: "#c8f2dc",
          200: "#91e5ba",
          300: "#5ad897",
          400: "#23cb75",
          500: "#00bf52",
          600: "#009944",
          700: "#007336",
          800: "#004d28",
          900: "#00261a",
        },

        redAccent: {
          100: "#ffe5e5",
          200: "#ffb3b3",
          300: "#ff8080",
          400: "#ff4d4d",
          500: "#ff1a1a",
          600: "#cc1414",
          700: "#990f0f",
          800: "#660a0a",
          900: "#330505",
        },
        blueAccent: {
          100: "#c7d8ff",
          200: "#91b4ff",
          300: "#5a90ff",
          400: "#246cff",
          500: "#0051ff",
          600: "#0041cc",
          700: "#003199",
          800: "#002066",
          900: "#001033",
        },
      }
    : {
        grey: {
          100: "#1a1a1a",
          200: "#333333",
          300: "#4d4d4d",
          400: "#666666",
          500: "#808080",
          600: "#999999",
          700: "#b3b3b3",
          800: "#cccccc",
          900: "#e6e6e6",
        },
        primary: {
          100: "#1a1033",
          200: "#351f66",
          300: "#512f99",
          400: "#faf6ff",
          500: "#8949ff",
          600: "#a465ff",
          700: "#bf91ff",
          800: "#dabdff",
          900: "#f5e9ff",
        },
        greenAccent: {
          100: "#00332d",
          200: "#00664a",
          300: "#009966",
          400: "#00cc83",
          500: "#1affa3",
          600: "#4dffb8",
          700: "#80ffcc",
          800: "#b3ffe0",
          900: "#e0fff5",
        },
        redAccent: {
          100: "#330505",
          200: "#660a0a",
          300: "#990f0f",
          400: "#cc1414",
          500: "#ff1a1a",
          600: "#ff4d4d",
          700: "#ff8080",
          800: "#ffb3b3",
          900: "#ffe5e5",
        },
        blueAccent: {
          100: "#002447",
          200: "#003d75",
          300: "#0056a3",
          400: "#006fd1",
          500: "#1a91ff",
          600: "#4da9ff",
          700: "#80c1ff",
          800: "#b3d9ff",
          900: "#e0f0ff",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#1a1a2e",
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#e6d8ee",
            },
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 13,
      h1: { fontFamily: "Poppins", fontSize: 42 },
      h2: { fontFamily: "Poppins", fontSize: 34 },
      h3: { fontFamily: "Poppins", fontSize: 26 },
      h4: { fontFamily: "Poppins", fontSize: 22 },
      h5: { fontFamily: "Poppins", fontSize: 18 },
      h6: { fontFamily: "Poppins", fontSize: 15 },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

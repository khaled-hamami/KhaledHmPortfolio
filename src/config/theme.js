import { createTheme } from "@mui/material/styles"

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "hsla(285, 100%, 88%, 1)",
    },
    primary: {
      main: "#be33f5",
    },
    secondary: {
      main: "#6c3890",
    },
    contrast: {
      main: "#000000",
      reverse: "#ffffff",
    },
  },
})

export const    darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "hsla(0,0%,12%,1)",
    },
    primary: {
      main: "#cd5ff8",
    },
    secondary: {
      main: "#b55ef1",
    },
    contrast: {
      main: "#ffffff",
      reverse: "#000000",
    },
  },
})

// src/styles/theme.js
import { createTheme } from "@mantine/core";

const theme = createTheme({
  colors: {
    brand: [
      "#F0FFF4", // lightest
      "#C6F6D5",
      "#9AE6B4",
      "#68D391",
      "#48BB78",
      "#38A169",
      "#2F855A",
      "#276749",
      "#22543D", // darkest
    ],
  },
  primaryColor: "brand",
  fontFamily: "Inter, Arial, sans-serif", // Using Mantine's default font "Inter"
  headings: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

export default theme;

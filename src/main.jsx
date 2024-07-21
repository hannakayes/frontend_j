import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SessionContextProvider from "./contexts/SessionContext.jsx";
import { MantineProvider } from "@mantine/core";

// Import your custom CSS file
import "./styles/index.css";

// Import the custom theme
import theme from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SessionContextProvider>
        <MantineProvider theme={theme}>
          <App />
        </MantineProvider>
      </SessionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

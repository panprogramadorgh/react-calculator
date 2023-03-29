import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ButtonContextProvider from "./contexts/ButtonContext";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ButtonContextProvider>
      <App />
    </ButtonContextProvider>
  </StrictMode>
);

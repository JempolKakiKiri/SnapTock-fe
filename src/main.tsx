import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppQueryProvider } from "./lib/query-client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppQueryProvider>
      <App />
    </AppQueryProvider>
  </StrictMode>,
);
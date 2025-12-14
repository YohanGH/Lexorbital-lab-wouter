import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wouter";

import "./styles/index.css";
import App from "./App.tsx";

// Base path for GitHub Pages
// Must match the base path in vite.config.ts
const repoName = "Lexorbital-lab-wouter";
const basePath =
  import.meta.env.PROD ? `/${repoName}` : "";

const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Root element not found");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router base={basePath}>
      <App />
    </Router>
  </StrictMode>
);

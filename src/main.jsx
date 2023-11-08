/*Dependencies*/
import React from "react";
import ReactDOM from "react-dom/client";
/*Context*/
import { NextUIProvider } from "@nextui-org/react";
/*Components*/
import App from "./App.jsx";
/*Styles*/
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
/**
 * Component to create the root react element,it wraps the app and provides different contexts.
 * @returns Customized Component.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <main>
          <App />
        </main>
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>
);

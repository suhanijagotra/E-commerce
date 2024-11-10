import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import App from "./App";
import ShopContextProvider from "./context/ShopContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Assuming you have a global CSS file

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create the root
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopContextProvider>
  </React.StrictMode>
);

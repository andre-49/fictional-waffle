// Theme-toggle
//--------------
// Create an app with a light/dark theme toggle:
// Store the theme in Context.
// A button toggles the theme between light and dark.
// The theme applies globally (e.g., background and text colors change).

import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import { ThemeContext } from "./ThemeContext";
import { ThemeProvider } from "./ThemeContext";
import "./index.css";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={` transition-colors duration-500 min-h-screen w-full flex justify-center ${
        theme === "light" ? "bg-gray-300" : "bg-gray-700"
      }`}
    >
      <div
        className={`${
          theme === "light" ? "bg-gray-200" : "bg-gray-800"
        } w-[500px] h-[100px]`}
      >
        <div>Random text here</div>
        <button className="border rounded-xl bg-amber-400" onClick={toggleTheme}>
          toggle theme button
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);

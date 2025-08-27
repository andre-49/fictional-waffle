// Login-form
//------------
// Create a login form with email and password fields:
// Make it a controlled component.
// Show an error message if the password is less than 6 characters.
// Add a button that toggles between showing and hiding the password.

import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="Enter email"
        className="border border-amber-200"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <input
          type={show ? "email" : "password"}
          placeholder="Enter Password"
          className="border border-amber-500"
          value={passwd}
          onChange={(e) => setPasswd(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setShow((prev) => !prev);
          }}
        >
          {show ? "Hidden" : "Show"}
        </button>
      </div>
      {passwd.length >=6 ? "" : <p className="text-red-700">Error: You need at least 6 characters for a valid password</p>}
    </form>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

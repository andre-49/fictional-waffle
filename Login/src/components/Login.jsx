// 1. Login-form
// Create a login form with email and password fields:
// Make it a controlled component.
// Show an error message if the password is less than 6 characters.
// Add a button that toggles between showing and hiding the password.

import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [togglePass, setTogglePass] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "") return console.log("Email can't be empty");
    if (formData.password.length < 6) {
      setPassError(true);
      return;
    }
    setFormData({ email: formData.email, password: formData.password });
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-2xl shadow-md flex flex-col gap-4 w-110"
      >
        <h1 className="font-bold text-3xl text-center">Login Form</h1>
        <label>
          Email:
          <input
            type="text"
            className="border border-black py-0.5 px-3 rounded-xl mb-6"
            placeholder="Enter your email..."
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </label>
        <label>
          Password:
          <input
            type={togglePass ? "text" : "password"}
            placeholder="Enter your password"
            className="border border-black py-0.5 px-3 rounded-xl"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              console.log(e.target.value);
            }}
          />
          <button type="button" onClick={() => setTogglePass(!togglePass)}>
            {togglePass ? "Hide" : "Show"}
          </button>
          {passError && (
            <p className="text-red-500">
              Password should have more than 6 characters
            </p>
          )}
        </label>
        <button className="border border-black py-2 rounded-xl px-1 mt-4 bg-blue-500">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

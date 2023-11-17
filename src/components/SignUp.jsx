// SignUp.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Css/SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    alert("Signed up successfully!");
  };

  return (
    <div className="sign__main">
      <section>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <h3>Email:</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Password:</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button__cs__form">
            <button type="submit">Sign Up</button>
            <Link to="/">
              <button type="button">SIGN IN</button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUp;

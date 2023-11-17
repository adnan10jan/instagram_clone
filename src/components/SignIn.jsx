// SignIn.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Css/SignUp.css";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users] = useState([{ email: "test@gmail.com", password: "test" }]);

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      // Redirect to PostForm after successful login
      navigate("/PostForm");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="sign__upmain">
      <section>
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
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
            <button type="submit">Sign In</button>
            <Link to="/SignUp">
              <button type="button">SIGN UP</button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignIn;

// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../src/components/SignIn";
import SignUp from "../src/components/SignUp";
import PostForm from "../src/components/PostForm"; // Assuming PostForm is another component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/PostForm" element={<PostForm />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;

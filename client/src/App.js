import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Contexts
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";

// Components
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Navbar from "./components/layouts/Navbar";
import Register from "./components/auth/Register";

function App() {
  return (
    <AuthState>
      <ContactState>
        <Fragment>
          <Router>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
              </Routes>
            </div>
          </Router>
        </Fragment>
      </ContactState>
    </AuthState>
  );
}

export default App;

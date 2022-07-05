import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";

import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

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
              </Routes>
            </div>
          </Router>
        </Fragment>
      </ContactState>
    </AuthState>
  );
}

export default App;

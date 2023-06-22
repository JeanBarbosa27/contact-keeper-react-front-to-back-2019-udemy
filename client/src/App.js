import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Contexts
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ContactState from "./context/contact/ContactState";

// Components
import About from "./components/pages/About";
import Alerts from "./components/alert/Alerts";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Navbar from "./components/layouts/Navbar";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/routing/PrivateRoute";

//utils
import setAuthToken from "./utils/setAuthToken";

const authToken = sessionStorage["contact-keeper-token"];
authToken && setAuthToken(authToken);

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Navbar />
            <div className="container">
              <Alerts />
              <Routes>
                <Route exact path="/" element={<PrivateRoute element={<Home />} />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
              </Routes>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;

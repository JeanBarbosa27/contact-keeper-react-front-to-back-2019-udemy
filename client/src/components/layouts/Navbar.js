import React, { useContext, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import authContext from "../../context/auth/authContext";
import contactContext from "../../context/contact/contactContext";

const Navbar = ({ icon, title }) => {
  const { isAuthenticated, logoutUser, user } = useContext(authContext);
  const { clearContacts } = useContext(contactContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logoutUser();
    clearContacts();
    navigate("/login", { replace: true });
  }

  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>
        {isAuthenticated ? (
          <Fragment>
            {user !== null && (<li>Welcome, {user.name}</li>)}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={onLogout}
              >
                <i className="fas fa-power-off text-danger" />
              </button>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link to="/register">Register account</Link>
            </li>
            <li>
              <Link to="/login">Login account</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;

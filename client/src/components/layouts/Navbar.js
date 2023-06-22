import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import authContext from "../../context/auth/authContext";

const Navbar = ({ icon, title }) => {
  const { isAuthenticated, logoutUser } = useContext(authContext);

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
                onClick={logoutUser}
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

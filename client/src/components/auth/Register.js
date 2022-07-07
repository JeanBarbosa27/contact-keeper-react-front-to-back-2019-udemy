import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import alertContext from "../../context/alert/alertContext";
import authContext from "../../context/auth/authContext";

const Register = () => {
  const { setAlert } = useContext(alertContext);
  const { registerUser, errors, clearErrors, isAuthenticated } =
    useContext(authContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;
  const requiredFields = [name, email, password];

  const validateRequiredFields = !!requiredFields.filter(
    (field) => field.trim() !== ""
  ).length;

  const onChange = ({ target }) =>
    setUser({ ...user, [target.name]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    if (!validateRequiredFields) {
      return setAlert("All fields must be fulfilled", "danger");
    }

    if (password !== password2) {
      return setAlert(
        "Password and Confirm password fields must be the same",
        "danger"
      );
    }

    registerUser({
      name,
      email,
      password,
    });
  };

  useEffect(() => {
    if (errors && errors.length) {
      errors.forEach((error) => setAlert(error.msg, "danger", 10000));
      clearErrors();
    }

    if (isAuthenticated) {
      navigate("/", { replace: true });
    }

    // eslint-disable-next-line
  }, [errors, isAuthenticated]);

  return (
    <div className="form-container">
      <h1 className="text-center">
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            required
            minLength="6"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            required
            minLength="6"
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
        <p>
          <Link to="/login">I have an account</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

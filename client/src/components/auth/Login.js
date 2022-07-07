import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import alertContext from "../../context/alert/alertContext";
import authContext from "../../context/auth/authContext";

import { validateRequiredFields } from "../../utils/forms";

const Login = () => {
  const { setAlert } = useContext(alertContext);
  const { errors, clearErrors, isAuthenticated, loginUser } =
    useContext(authContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = ({ target }) =>
    setUser({ ...user, [target.name]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();

    if (!validateRequiredFields([email, password])) {
      return setAlert("All fields must be fulfilled", "danger");
    }

    loginUser({ email, password });
  };

  useEffect(() => {
    if (errors && errors.length) {
      errors.forEach((error) => {
        setAlert(error.msg, "danger");
      });

      clearErrors();
    }

    if (isAuthenticated) {
      navigate("/", { replace: true });
    }

    //eslint-disable-next-line
  }, [errors, isAuthenticated]);

  return (
    <div className="form-container">
      <h1 className="text-center">
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
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
            minLength="6"
            required
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
        <p>
          <Link to="/register">I don't have an account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

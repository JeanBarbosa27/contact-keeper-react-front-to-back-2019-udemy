import { useState, useContext } from "react";

import alertContext from "../../context/alert/alertContext";

const Register = () => {
  const { setAlert } = useContext(alertContext);
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

    console.log("Registering:", user);
  };

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
      </form>
    </div>
  );
};

export default Register;

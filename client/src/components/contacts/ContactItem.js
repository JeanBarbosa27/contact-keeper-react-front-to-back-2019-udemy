import PropTypes from "prop-types";

import { capitalize } from "../../utils/strings";

const ContactItem = ({ contact: { id, name, email, phone, type } }) => {
  const badgeClassesFactory = {
    professional: "badge-success",
    personal: "badge-primary",
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={`badge ${badgeClassesFactory[type]}`}
        >
          {capitalize(type)}
        </span>
      </h3>
      <ul className="list">
        <li>
          <i className="fas fa-envelope-open" /> <span>{email}</span>
        </li>
        <li>
          <i className="fas fa-phone" /> <span>{phone}</span>
        </li>
      </ul>

      <div className="buttons-wrapper">
        <button className="btn btn-dark btn-sm">Edit {id}</button>
        <button className="btn btn-danger btn-sm">Delete {id}</button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;

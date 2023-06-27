import { useContext } from "react";
import PropTypes from "prop-types";

import { capitalize } from "../../utils/strings";

import contactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const { deleteContact, setCurrent, current, clearCurrent } =
    useContext(contactContext);
  const badgeClassesFactory = {
    professional: "badge-success",
    personal: "badge-primary",
  };
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    if (current && current.id === _id) {
      clearCurrent();
    }

    deleteContact(_id);
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
        <button
          type="button"
          onClick={() => setCurrent(contact)}
          className="btn btn-dark btn-sm"
        >
          Edit
        </button>
        <button onClick={onDelete} className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;

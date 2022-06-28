import { useContext } from "react";
import PropTypes from "prop-types";

import { capitalize } from "../../utils/strings";

import contactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact: { id, name, email, phone, type } }) => {
  const { deleteContact } = useContext(contactContext);
  const badgeClassesFactory = {
    professional: "badge-success",
    personal: "badge-primary",
  };

  const onEdit = (id) => {
    console.log("id to edit:", id);
  };

  const onDelete = (id) => {
    deleteContact(id);
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
          onClick={() => onEdit(id)}
          className="btn btn-dark btn-sm"
        >
          Edit
        </button>
        <button onClick={() => onDelete(id)} className="btn btn-danger btn-sm">
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

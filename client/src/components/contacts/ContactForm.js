import { useState, useContext, useEffect } from "react";

import contactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const { addContact, current, clearCurrent, updateContact } =
    useContext(contactContext);
  const initialState = {
    name: "",
    email: "",
    phone: "",
    type: "personal",
  };
  const [contact, setContact] = useState(initialState);
  const isEditing = current !== null;
  const { name, email, phone, type } = contact;

  const onChange = ({ target }) =>
    setContact({
      ...contact,
      [target.name]: target.value,
    });

  const onSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      return updateContact(contact);
    }

    addContact(contact);
    setContact(initialState);
  };

  useEffect(() => {
    if (isEditing) {
      return setContact(current);
    }

    setContact(initialState);

    // eslint-disable-next-line
  }, [contactContext, current]);

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {isEditing ? `Editing ${name}` : "Add a new contact"}
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <label>
        <input
          type="radio"
          name="type"
          checked={type === "personal"}
          value="personal"
          onChange={onChange}
        />
        <span> Personal</span>
      </label>
      <label>
        <input
          type="radio"
          name="type"
          checked={type === "professional"}
          value="professional"
          onChange={onChange}
        />
        <span> Professional</span>
      </label>
      <div className="buttons-wrapper">
        <input
          type="submit"
          value="Save"
          className="btn btn-primary btn-block"
        />
        {isEditing && (
          <button
            type="button"
            onClick={clearCurrent}
            className="btn btn-secondary btn-block"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

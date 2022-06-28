import { useState, useContext } from "react";

import contactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const { addContact } = useContext(contactContext);
  const initialState = {
    name: "",
    email: "",
    phone: "",
    type: "personal",
  };
  const [contact, setContact] = useState(initialState);
  const { name, email, phone, type } = contact;

  const onChange = ({ target }) =>
    setContact({
      ...contact,
      [target.name]: target.value,
    });

  const onSubmit = (event) => {
    event.preventDefault();
    addContact(contact);
    setContact(initialState);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contact</h2>
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
      </div>
    </form>
  );
};

export default ContactForm;

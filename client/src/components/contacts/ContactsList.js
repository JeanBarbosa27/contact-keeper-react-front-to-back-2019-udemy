import { Fragment, useContext } from "react";

import contactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const { contacts } = useContext(contactContext);

  return (
    <Fragment>
      <h4>Contacts:</h4>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ContactsList;

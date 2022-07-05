import { useContext } from "react";

import contactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const { contacts, filtered } = useContext(contactContext);

  if (!contacts.length) {
    return <h4>You should add contacts...</h4>;
  }

  if (filtered && !filtered.length) {
    return <h4>No contacts found!</h4>;
  }

  return (
    <div>
      <h4>Contacts:</h4>
      <ul>
        {filtered && filtered.length
          ? filtered.map((contact) => (
              <li key={contact.id}>
                <ContactItem contact={contact} />
              </li>
            ))
          : contacts.map((contact) => (
              <li key={contact.id}>
                <ContactItem contact={contact} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ContactsList;

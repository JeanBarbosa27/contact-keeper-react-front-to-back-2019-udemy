import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import contactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const { contacts, filtered } = useContext(contactContext);
  const transitionTimeout = 500;

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
        <TransitionGroup>
          {filtered && filtered.length
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact.id}
                  timeout={transitionTimeout}
                  classNames="item"
                >
                  <li>
                    <ContactItem contact={contact} />
                  </li>
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact.id}
                  timeout={transitionTimeout}
                  classNames="item"
                >
                  <li>
                    <ContactItem contact={contact} />
                  </li>
                </CSSTransition>
              ))}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default ContactsList;

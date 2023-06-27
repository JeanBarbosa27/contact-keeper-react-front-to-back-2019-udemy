import { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import contactContext from "../../context/contact/contactContext";

import Spinner from '../layouts/Spinner';
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const { contacts, filtered, getContacts, loading } = useContext(contactContext);

  const transitionTimeout = 500;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, [])

  if (!loading && contacts !== null && contacts.length === 0) {
    return <h4>You should add contacts...</h4>;
  }

  if (filtered && !filtered.length) {
    return <h4>No contacts found!</h4>;
  }

  return contacts !== null && !loading
    ? (
        <div>
          <h4>Contacts:</h4>
          <ul>
            <TransitionGroup>
              {filtered && filtered.length
                ? filtered.map((contact) => (
                    <CSSTransition
                      key={contact._id}
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
                      key={contact._id}
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
      )
    : (<Spinner />)
};

export default ContactsList;

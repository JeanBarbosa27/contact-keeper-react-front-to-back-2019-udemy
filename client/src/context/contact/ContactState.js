import { useReducer } from "react";
import uuid from "uuid";

import contactReducer from "./contactReducer";
import ContactContext from "./contactContext";
import {
  ADD_CONTACT,
  FILTER_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jondoe@gmail.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "Sara Smith",
        email: "sarasmith@gmail.com",
        phone: "222-222-2222",
        type: "professional",
      },
      {
        id: 3,
        name: "Trevor Williams",
        email: "trevorwilliams@gmail.com",
        phone: "333-333-3333",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Filter contacts

  // Clear filter

  // Update contact

  // Delete contact

  // Set Current

  // Clear Current

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

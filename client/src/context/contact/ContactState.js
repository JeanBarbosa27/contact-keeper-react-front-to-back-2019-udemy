import { useReducer } from "react";
import axios from "axios";

import contactReducer from "./contactReducer";
import ContactContext from "./contactContext";
import {
  ADD_CONTACT,
  FILTER_CONTACTS,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  CONTACT_ERROR,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = async (contact) => {
    const config = { headers: { 'Content-Type': 'application/json' } }

    try {
      const response = await axios.post('api/contacts', contact, config)
      dispatch({ type: ADD_CONTACT, payload: response.data });
    } catch (error) {
      //TODO: add a logger
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  };

  const filterContacts = (text) =>
    dispatch({ type: FILTER_CONTACTS, payload: text });

  const clearFilter = () => dispatch({ type: CLEAR_FILTER });

  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  const deleteContact = (id) => dispatch({ type: DELETE_CONTACT, payload: id });

  const setCurrent = (contact) =>
    dispatch({ type: SET_CURRENT, payload: contact });

  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

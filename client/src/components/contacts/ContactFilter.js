import { useRef, useContext, useEffect } from "react";

import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const text = useRef("");
  const { filterContacts, clearFilter, filtered } = useContext(ContactContext);

  const onChange = (e) => {
    if (text.current.value.trim()) {
      return filterContacts(e.target.value);
    }

    clearFilter();
  };

  useEffect(() => {
    if (!filtered) {
      text.current.value = "";
    }
  });

  return (
    <form className="flex-wrapper flex-wrapper--between">
      <input
        ref={text}
        type="text"
        placeholder="Filter your contacts..."
        onChange={onChange}
      />
      <button type="button" className="btn btn-light" onClick={clearFilter}>
        Clear
      </button>
    </form>
  );
};

export default ContactFilter;

import { useContext, useEffect } from "react";

import authContext from "../../context/auth/authContext";

import ContactForm from "../contacts/ContactForm";
import ContactsList from "../contacts/ContactsList";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  const { loadUser } = useContext(authContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <ContactForm />
      <div>
        <ContactFilter />
        <ContactsList />
      </div>
    </div>
  );
};

export default Home;

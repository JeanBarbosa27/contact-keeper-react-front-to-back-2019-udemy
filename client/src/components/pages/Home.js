import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import authContext from "../../context/auth/authContext";

import ContactForm from "../contacts/ContactForm";
import ContactsList from "../contacts/ContactsList";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  const { loadUser } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage["contact-keeper-token"];
    if (authToken) {
      loadUser();
    } else {
      navigate("/login", { replace: true });
    }

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

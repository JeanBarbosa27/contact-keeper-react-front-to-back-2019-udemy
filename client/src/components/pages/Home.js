import ContactForm from "../contacts/ContactForm";
import ContactsList from "../contacts/ContactsList";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
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

import ContactForm from "../contacts/ContactForm";
import ContactsList from "../contacts/ContactsList";

const Home = () => {
  return (
    <div className="grid-2">
      <ContactForm />
      <ContactsList />
    </div>
  );
};

export default Home;

import ContactsList from "../contacts/ContactsList";

const Home = () => {
  return (
    <div className="grid-2">
      <div>Contact Form</div>
      <div>
        <ContactsList />
      </div>
    </div>
  );
};

export default Home;

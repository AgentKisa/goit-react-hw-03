import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import contactJson from "./components/contact-masiv.json";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
console.log(contactJson);

function App() {
  const [count, setCount] = useState(() => {
    const contactLS = window.localStorage.getItem("ContactLS");

    if (contactLS !== null) {
      return JSON.parse(contactLS);
    }

    return contactJson;
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.localStorage.setItem("ContactLS", JSON.stringify(count));
  }, [count]);

  const visibleContact = count.filter((names) =>
    names.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = (newContact) => {
    setCount((prev) => {
      return [...prev, newContact];
    });
  };

  const deleteContact = (ContactId) => {
    setCount((prev) => {
      return prev.filter((cont) => cont.id !== ContactId);
    });
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={search} search={setSearch} />
        <ContactList
          visibleContact={visibleContact}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;

import React from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ visibleContact, deleteContact }) => {
  return (
    <ul>
      {visibleContact.map((pull) => (
        <li key={pull.id}>
          <Contact pull={pull} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

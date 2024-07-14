// Contact.js
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import React from "react";

const Contact = ({ pull, deleteContact }) => {
  return (
    <div>
      <div>
        <p>
          <RiContactsFill /> {pull.name}
        </p>
      </div>
      <div>
        <p>
          <BsFillTelephoneFill /> {pull.number}
        </p>
      </div>
      <button onClick={() => deleteContact(pull.id)}>Delete</button>
    </div>
  );
};

export default Contact;

// src/views/AddContact.js

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";

const AddContact = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const { contactId } = useParams();

  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    agenda_slug: "my_agenda",
    address: "",
    phone: ""
  });

  useEffect(() => {
    if (contactId) {
      const existingContact = store.contacts.find(c => c.id === parseInt(contactId));
      if (existingContact) {
        setContact(existingContact);
      }
    }
  }, [contactId, store.contacts]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactId) {
      actions.updateContact(contactId, contact);
    } else {
      actions.addContact(contact);
    }
    navigate("/contact");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="full_name" value={contact.full_name} onChange={handleChange} placeholder="Nombre completo" required />
      <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Correo electrónico" required />
      <input type="text" name="address" value={contact.address} onChange={handleChange} placeholder="Dirección" required />
      <input type="text" name="phone" value={contact.phone} onChange={handleChange} placeholder="Teléfono" required />
      <button type="submit">{contactId ? "Actualizar" : "Crear"} Contacto</button>
    </form>
  );
};

export default AddContact;
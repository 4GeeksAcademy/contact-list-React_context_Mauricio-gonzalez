// src/component/ContactCard.js

import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="contact-card">
      <h2>{contact.full_name}</h2>
      <p>Email: {contact.email}</p>
      <p>Teléfono: {contact.phone}</p>
      <button onClick={() => navigate(`/edit-contact/${contact.id}`)}>Editar</button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default ContactCard;
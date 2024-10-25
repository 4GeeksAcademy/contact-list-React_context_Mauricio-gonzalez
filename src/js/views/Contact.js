// src/views/Contact.js

import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard";

const Contact = () => {
  const { store, actions } = useContext(Context);

  // Cargar contactos al montar el componente
  useEffect(() => {
    actions.loadContacts();
  }, [actions]);

  return (
    <div>
      <h1>Lista de Contactos</h1>
      
      {store.contacts && store.contacts.length > 0 ? (
        store.contacts.map(contact => (
          <ContactCard 
            key={contact.id} 
            contact={contact} 
            onDelete={() => actions.deleteContact(contact.id)} 
          />
        ))
      ) : (
        <p>No hay contactos disponibles.</p>
      )}
    </div>
  );
};

export default Contact;
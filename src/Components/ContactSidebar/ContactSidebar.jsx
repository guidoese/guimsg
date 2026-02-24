import React, { useContext } from "react";
import { getContacts } from "../../services/contactsService";
import { ContactsContext } from "../../Context/ContactsContext";
import { Link } from "react-router";
import "./ContactSidebar.css";

export default function ContactSidebar() {
  //useContext es un hook que nos permite consumir el contexto
  //Recibe por parametro el contexto que queremos consumir
  //Una vez consumido me traera el valor del value del contexto
  const { contacts, favorite_name } = useContext(ContactsContext);
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Chats</h2>
      </div>
      <div className="contacts-list">
        {contacts.map((contact) => {
          return (
            <Link
              to={`/contact/${contact.id}`}
              key={contact.id}
              className="contact-item"
            >
              <img
                src={contact.profile_picture}
                alt={contact.name}
                className="contact-item-avatar"
              />
              <div className="contact-item-info">
                <h3>{contact.name}</h3>
                <span className="contact-item-time">
                  {contact.last_time_connection}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

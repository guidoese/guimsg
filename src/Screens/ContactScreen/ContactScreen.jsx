import React, { useContext } from "react";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import { useParams } from "react-router";
import { ContactsContext } from "../../Context/ContactsContext";
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm";
import Messages from "../../Components/Messages/Messages";
import "./ContactScreen.css";

export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext);

  //Obtengo el id del contacto seleccionado a traves de los parametros de la url
  const { contact_id } = useParams();

  //Busco el contacto seleccionado en la lista de contactos
  const contact_selected = contacts.find(
    (contact) => Number(contact.id) === Number(contact_id),
  );

  return (
    <div className="contact-screen-container">
      <ContactSidebar />
      
      <div className="chat-area">
        {/* Si el contacto seleccionado no existe, muestro un mensaje si no, muestro el contacto */}
        {!contact_selected ? (
          <div className="empty-state">
            <h1>Selecciona un contacto para empezar a chatear</h1>
          </div>
        ) : (
          <>
            <div className="chat-header">
              <img 
                src={contact_selected.profile_picture} 
                alt={contact_selected.name}
                className="contact-avatar"
              />
              <div className="contact-info">
                <h2>{contact_selected.name}</h2>
                <span className="last-connection">{contact_selected.last_time_connection}</span>
              </div>
            </div>

            <div className="messages-container">
              <Messages contact_selected={contact_selected} />
            </div>

            <div className="form-container">
              <NewMessageForm contact_id={contact_id} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

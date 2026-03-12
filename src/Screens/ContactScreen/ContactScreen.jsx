import React, { useContext, useState, useEffect, useRef } from "react";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import { useParams, useNavigate, Link } from "react-router";
import { ContactsContext } from "../../Context/ContactsContext";
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm";
import Messages from "../../Components/Messages/Messages";
import { GoArrowLeft } from "react-icons/go";
import "./ContactScreen.css";
import "../../styles/global.css";
import UserSidebar from "../../Components/UserSidebar/UserSidebar";

export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext);
  const { contact_id } = useParams();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const messagesContainerRef = useRef(null);

  //Busco el contacto seleccionado en la lista de contactos
  const contact_selected = contacts.find(
    (contact) => Number(contact.id) === Number(contact_id),
  );

  // scroll to bottom anytime the selected contact's messages list changes
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [contact_selected?.id, contact_selected?.messages?.length]);

  const handleBackToSidebar = () => {
    navigate("/home");
  };

  return (
    <div className="contact-screen-container">
      <div className="user-wrapper">
        <UserSidebar />
      </div>
      <div className={`sidebar-wrapper ${showSidebar ? "visible" : ""}`}>
        <ContactSidebar />
      </div>

      <div className="chat-area">
        {/* Si el contacto seleccionado no existe, muestro un mensaje si no, muestro el contacto */}
        {!contact_selected ? (
          <div className="empty-state">
            <h1>Selecciona un contacto para empezar a chatear</h1>
          </div>
        ) : (
          <>
            <div className="chat-header">
              <button className="back-button" onClick={handleBackToSidebar}>
                <GoArrowLeft size={24} />
              </button>
              <Link
                to={`/contact/${contact_selected.id}/info`}
                key={contact_selected.id}
                className="contact-item-header"
              >
                <img
                  src={contact_selected.profile_picture}
                  alt={contact_selected.name}
                  className="contact-avatar"
                />
                <div className="contact-info">
                  <h2 className="contact-info-title">
                    {contact_selected.name}
                  </h2>
                  <span className="last-connection">
                    {contact_selected.last_time_connection}
                  </span>
                </div>
              </Link>
            </div>

            <div className="messages-container" ref={messagesContainerRef}>
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

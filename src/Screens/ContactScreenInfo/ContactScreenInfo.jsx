import React from "react";
import "./ContactScreenInfo.css";
import { Link, useParams } from "react-router";
import { getContacts } from "../../services/contactsService";
import { GoArrowLeft } from "react-icons/go";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";

export const ContactScreenInfo = () => {
  // leer el id desde la ruta: /contact/:contact_id/info
  const { contact_id } = useParams();

  const contacts = getContacts();
  const contact_selected = contacts.find(
    (contact) => Number(contact.id) === Number(contact_id),
  );

  if (!contact_selected) {
    return <div>Contacto no encontrado</div>;
  }

  return (
    <div className="contact-info-screen-container">
      <div className="contact-info-box">
        <Link
          to={`/contact/${contact_id}`}
          key={contact_selected.id}
          className="arrow-back-button-info"
        >
          <button className="arrow-button">
            <GoArrowLeft size={24} />
          </button>
        </Link>

        <img
          src={contact_selected.profile_picture}
          alt={contact_selected.name}
          className="contact-avatar-info"
        />
        <h1>{contact_selected.name}</h1>
        <p>Teléfono: {contact_selected.id}</p>
        <p>Última conexión: {contact_selected.last_time_connection}</p>
        {/* ...any other details*/}
      </div>
    </div>
  );
};

import React, { useContext, useRef } from "react";
import { ContactsContext } from "../../Context/ContactsContext";
import "./NewMessageForm.css";
import { CiLocationArrow1 } from "react-icons/ci";

const NewMessageForm = ({ contact_id }) => {
  const { addNewMessage } = useContext(ContactsContext);
  const textareaRef = useRef(null);

  /* Logica para capturar campos del formulario */
  //FORMA MAS SIMPLE
  function handleSubmitNewMessage(event) {
    event.preventDefault();
    /* 
    event.target es una referencia al elemento del HTML que desencadeno el evento
    */

    const new_message = event.target.nuevo_mensaje.value;
    console.log(new_message);
    addNewMessage(contact_id, new_message);

    // Limpiar el input después de enviar
    textareaRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmitNewMessage} className="new-message-form">
      <textarea
        ref={textareaRef}
        placeholder="Escribe un mensaje..."
        id="nuevo_mensaje"
        name="nuevo_mensaje"
        className="message-input"
      />
      <button type="submit" className="send-button">
        <CiLocationArrow1 size={24} />
      </button>
    </form>
  );
};

export default NewMessageForm;

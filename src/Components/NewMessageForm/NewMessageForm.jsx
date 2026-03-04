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
    // read value directly from ref instead of relying on event.target
    const new_message = textareaRef.current?.value || "";
    if (new_message.trim() === "") return;

    console.log(new_message);
    addNewMessage(contact_id, new_message);

    // Limpiar el input después de enviar
    textareaRef.current.value = "";
  }

  // funcion para lograr que el Enter Me haga el submit del mensaje
  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      // aca disparo la funcion handler
      handleSubmitNewMessage(event);
    }
  }

  return (
    <form onSubmit={handleSubmitNewMessage} className="new-message-form">
      <textarea
        ref={textareaRef}
        placeholder="Escribe un mensaje..."
        id="nuevo_mensaje"
        name="nuevo_mensaje"
        className="message-input"
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className="send-button">
        <CiLocationArrow1 size={24} />
      </button>
    </form>
  );
};

export default NewMessageForm;

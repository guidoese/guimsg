import React, { useContext } from "react";
import { ContactsContext } from "../../Context/ContactsContext";

const NewMessageForm = ({ contact_id }) => {
  const { addNewMessage } = useContext(ContactsContext);

  /* Logica oara capturar campos del formulario */
  //FORMA MAS SIMPLE
  function handleSubmitNewMessage(event) {
    event.preventDefault();
    /* 
    event.target es una referencia al elemento del HTML que desencadeno el evento
    */

    const new_message = event.target.nuevo_mensaje.value;
    console.log(new_message);
    addNewMessage(contact_id, new_message);
  }

  return (
    <div>
      <form onSubmit={handleSubmitNewMessage} id="123">
        <label htmlFor="nuevo_mensaje">Nuevo mensaje</label>
        <textarea
          placeholder="Escribe un mensaje..."
          id="nuevo_mensaje"
          name="nuevo_mensaje"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default NewMessageForm;

/* function EjemploDeTargetConBotones() {
    
  function handleClickDummy(event) {
    console.log(event.target);
  }

  return (
    <div>
      <button id="circulo" onClick={handleClickDummy}>
        Click
      </button>
      <button id="linea" onClick={handleClickDummy}>
        Click
      </button>
      <button id="cuadrado" onClick={handleClickDummy}>
        Click
      </button>
    </div>
  );
}
 */

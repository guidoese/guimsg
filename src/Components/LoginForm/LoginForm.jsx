import React, { useRef } from "react";
import "./LoginForm.css";
import user from "../../data/userData";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const textareaRef = useRef(null);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
  };

  function handleSubmitForm(event) {
    event.preventDefault();
    /* 
    event.target es una referencia al elemento del HTML que desencadeno el evento
    */

    user.name = event.target.username.value;
    user.password = event.target.userpassword.value;
    textareaRef.current.value = "";
    handleStart();

    // Limpiar el input después de enviar
  }
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmitForm} className="login-form">
        <img src="./whatsapp.png" alt="logo" class="logo-whattsapp" />
        <h2 className="wellcome-title">Bienvenido a guiMsg</h2>
        <h3 className="authors-subtitle">Inspirado en Whattsapp</h3>
        <input
          ref={textareaRef}
          type="text"
          id="username"
          name="username"
          className="login-input"
          placeholder="Usuario"
        />

        <input
          type="password"
          id="userpassword"
          name="userpassword"
          className="login-input"
          placeholder="Contraseña"
        />
        <button type="submit" className="submit-login-button">
          Login
        </button>
      </form>
    </div>
  );
};

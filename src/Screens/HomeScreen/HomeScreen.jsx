import React from "react";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import "./HomeScreen.css";
import "../../styles/global.css";
export default function HomeScreen() {
  return (
    <div className="home-screen-container">
      <ContactSidebar />
      <div className="chat-area-empty">
        <div className="empty-state">
          <h1 className="empty-state-title">
            Selecciona un contacto para empezar a chatear
          </h1>
        </div>
      </div>
    </div>
  );
}

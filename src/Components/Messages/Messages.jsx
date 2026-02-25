import React from "react";
import "./Messages.css";

const Messages = ({ contact_selected }) => {
  return (
    <div className="messages-list">
      {contact_selected.messages.map((message) => {
        return (
          <div
            key={message.id}
            className={`message-bubble ${message.send_by_me ? "sent" : "received"}`}
          >
            <p className="message-text">{message.text}</p>
            <span className="message-time">{message.created_at}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;

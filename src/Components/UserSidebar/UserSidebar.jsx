import React from "react";
import "../../styles/global.css";
import user from "../../data/userData";
import "./UserSidebar.css";

export default function UserSidebar() {
  return (
    <div className="user-sidebar-container">
      <img src={user.profile_picture} alt={user.name} className="user-photo" />
    </div>
  );
}

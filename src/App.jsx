import React, { useState } from "react";
import { Route, Routes } from "react-router";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ErrorNotFoundScreen from "./Screens/ErrorNotFoundScreen/ErrorNotFoundScreen";
import { getContacts } from "./services/contactsService";
import ContactsContextProvider from "./Context/ContactsContext";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

function App() {
  return (
    <div>
      <ContactsContextProvider>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/contact/:contact_id" element={<ContactScreen />} />
          <Route path="*" element={<ErrorNotFoundScreen />} />
        </Routes>
      </ContactsContextProvider>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ErrorNotFoundScreen from "./Screens/ErrorNotFoundScreen/ErrorNotFoundScreen";
import { getContacts } from "./services/contactsService";
import ContactsContextProvider from "./Context/ContactsContext";

function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    /*  setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1); */
    // si quiero hacer esto uso una callback
    setCounter((currentCounter) => {
      return currentCounter + 1;
    });
    /* 
    setCounter((currentCounter) => {
      return currentCounter + 1;
    });
    setCounter((currentCounter) => {
      return currentCounter + 1;
    }); */
    // por eso usamos la callback para grabar el mensaje
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <img src="/vite.svg" />
      <button onClick={increment}>+</button>
      <span>Contador: {counter}</span>
      <button onClick={decrement}>-</button>
      <ContactsContextProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact/:contact_id" element={<ContactScreen />} />
          <Route path="*" element={<ErrorNotFoundScreen />} />
        </Routes>
      </ContactsContextProvider>
    </div>
  );
}

export default App;

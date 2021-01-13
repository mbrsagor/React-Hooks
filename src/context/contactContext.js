import React, { useReducer, createContext } from "react";
import reducer from "../reducers/contactReducer";

export const ContactContext = createContext();
const initalValues = {
  contacts: [
    { id: "100", name: "Mbr Sagor", email: "mbrsagor@gmail.com" },
    { id: "098", name: "Md. Ohi", email: "ohi@gmail.com" },
    { id: "099", name: "Meg babu", email: "meg@gmail.com" },
  ],
  isLoading: false,
  error: null,
};

export const ContactContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initalValues);

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};

import { createContext, useReducer } from "react";
import { useModal } from "../hook/useModal";
import { formularioReducer } from "../reducers/formularioReducer";

export const appContext = createContext();

const MyProvider = ({ children }) => {
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [contactos, dispatch] = useReducer(formularioReducer, []);

  const datos = {
    isOpenContact,
    openModalContact,
    closeModalContact,
    contactos,
    dispatch,
  };

  return <appContext.Provider value={datos}>{children}</appContext.Provider>;
};

export default MyProvider;

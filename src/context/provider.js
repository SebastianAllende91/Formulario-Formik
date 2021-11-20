import { createContext, useState } from "react";
import { useModal } from "../hook/useModal";

export const appContext = createContext();

const MyProvider = ({ children }) => {
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [contactos, setContactos] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    // console.log(data);
    setContactos([...contactos, data]);
  };

  const updateData = (data) => {
    let newData = contactos.map((el) => (el.id === data.id ? data : el));
    setContactos(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Esta seguro que desea eliminar el contacto: ${id}`
    );

    if (isDelete) {
      let newData = contactos.filter((el) => el.id !== id);
      setContactos(newData);
    }
  };

  const edit = (el) => {
    setDataToEdit(el);
    openModalContact();
  };

  const datos = {
    isOpenContact,
    openModalContact,
    closeModalContact,
    contactos,
    dataToEdit,
    setDataToEdit,
    createData,
    updateData,
    deleteData,
    edit,
  };

  return <appContext.Provider value={datos}>{children}</appContext.Provider>;
};

export default MyProvider;

import React, { useContext } from "react";
import Modal from "./Modal";
import CrudFromulario from "./CrudFromulario";
import TablaContactos from "./TablaContactos";
import { appContext } from "../context/provider";

const Formulario = () => {
  const {
    openModalContact,
    createData,
    updateData,
    dataToEdit,
    setDataToEdit,
    isOpenContact,
    closeModalContact,
    contactos,
    edit,
    deleteData,
  } = useContext(appContext);

  return (
    <div>
      <h3>Ingrese sus datos:</h3>
      <button onClick={openModalContact}>Formulario</button>
      <Modal
        children={
          <CrudFromulario
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        }
        isOpen={isOpenContact}
        closeModal={closeModalContact}
      ></Modal>
      <TablaContactos
        data={contactos}
        setDataToEdit={edit}
        deleteData={deleteData}
      />

      <h1>{dataToEdit && dataToEdit.id}</h1>
    </div>
  );
};

export default Formulario;

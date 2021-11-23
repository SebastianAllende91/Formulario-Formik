import React, { useContext } from "react";
import Modal from "../layouts/Modal";
import CrudFromulario from "../layouts/CrudFromulario";
import TablaContactos from "../layouts/TablaContactos";
import { appContext } from "../context/provider";

const Formulario = () => {
  const { openModalContact, isOpenContact, closeModalContact, contactos } =
    useContext(appContext);

  return (
    <div>
      <h3>Ingrese sus datos:</h3>
      <button onClick={openModalContact}>Formulario</button>
      <Modal
        children={<CrudFromulario />}
        isOpen={isOpenContact}
        closeModal={closeModalContact}
      ></Modal>
      <TablaContactos data={contactos} />
    </div>
  );
};

export default Formulario;

import React, { useState } from "react";
import Modal from "./Modal";
import CrudFromulario from "./CrudFromulario";
import TablaContactos from "./TablaContactos";
import { useModal } from "../hook/useModal";

const Formulario = () => {
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

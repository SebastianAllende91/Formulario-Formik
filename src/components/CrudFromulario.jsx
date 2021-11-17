import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Container from "@mui/material/Container";
import * as Yup from "yup";

const RegisterSchema = Yup.object({
  nombre: Yup.string().required("Este campo es obligatorio"),
  apellido: Yup.string().required("Este campo es obligatorio"),
  email: Yup.string().required("Este correo electronico es invalido"),
  telefono: Yup.number().typeError("Solo acepta numeros"),
});

let initial = {
  id: null,
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
};

const CrudFormulario = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(initial);

  useEffect(() => {
    if (dataToEdit) {
      setForm({ ...form, dataToEdit });
      console.log(form);
    } else {
      setForm(initial);
      setDataToEdit(null);
    }
  }, [dataToEdit]);

  return (
    <Container>
      <Formik
        initialValues={form}
        validationSchema={RegisterSchema}
        // validateOnBlur
        validateOnSubmit
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            if (form.id === null) {
              createData(values);
            } else {
              updateData(form);
              console.log(form);
            }
            // createData(values);
            resetForm();

            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          //handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          submitForm,
          initialValues,
        }) => (
          <>
            <form onSubmit={handleSubmit}>
              <>
                <input
                  error={errors.nombre}
                  placeholder="Ingrese su nombre..."
                  name="nombre"
                  onChange={handleChange("nombre")}
                  //   onBlur={handleBlur("name")}
                  value={values.nombre}
                />
                {touched.nombre && errors.nombre && errors.nombre}
              </>
              <>
                <input
                  placeholder="Ingrese su apellido..."
                  name="apellido"
                  onChange={handleChange("apellido")}
                  //   onBlur={handleBlur("id")}
                  value={values.apellido}
                />
                {touched.apellido && errors.apellido && errors.apellido}
              </>
              <>
                <input
                  placeholder="Ingrese su email"
                  name="email"
                  onChange={handleChange("email")}
                  //   onBlur={handleBlur("phone")}
                  value={values.email}
                />
                {touched.email && errors.email && errors.email}
              </>
              <>
                <input
                  placeholder="Numero Telefonico..."
                  name="telefono"
                  type="number"
                  onChange={handleChange("telefono")}
                  //   onBlur={handleBlur("email")}
                  value={values.telefono}
                />
                {touched.telefono && errors.telefono && errors.telefono}
              </>
              <button type="submit" onClick={handleSubmit}>
                Registrarme
              </button>
            </form>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default CrudFormulario;

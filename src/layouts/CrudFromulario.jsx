import React, { useContext } from "react";
import { Formik } from "formik";
import Container from "@mui/material/Container";
import * as Yup from "yup";
import { appContext } from "../context/provider";
import { TYPES } from "../type/formularioAction";

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

const CrudFormulario = () => {
  const { dispatch } = useContext(appContext);

  return (
    <Container>
      <Formik
        initialValues={initial}
        validationSchema={RegisterSchema}
        validateOnSubmit
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            if (initial.id === null) {
              values.id = Date.now();

              dispatch({
                type: TYPES.CREATE_DATA,
                payload: values,
              });
            } else {
              dispatch({ type: TYPES.UPDATE_DATA, payload: values });
            }
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
                  value={values.nombre}
                />
                {touched.nombre && errors.nombre && errors.nombre}
              </>
              <>
                <input
                  placeholder="Ingrese su apellido..."
                  name="apellido"
                  onChange={handleChange("apellido")}
                  value={values.apellido}
                />
                {touched.apellido && errors.apellido && errors.apellido}
              </>
              <>
                <input
                  placeholder="Ingrese su email"
                  name="email"
                  onChange={handleChange("email")}
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

import React, { Component } from 'react';
import { Formik } from 'formik';
import { object, shape, string } from 'yup';
import FormDatosPersonales from './FormDatosPersonales';

export default class DatosPersonalesContainer extends Component {

  constructor(props) {
    super(props);
  }

  initialValuesForm = {
    firstname: '',
    document: '',
    numberdoc: '',
    email: ''
  }
  
  schemaValidation = object().shape({
    firstname: string()
               .matches(/^[a-zA-Z]+$/, { message: "Solo letras" })
               .required('Este campo es requerido'),
    document: string()
              .required('Este campo es requerido'),
    numberdoc: string()
               .matches(/^[0-9]*$/, { message: "Solo números" })
               .required('Este campo es requerido'),
    email: string()
           .email('El email no es válido')
           .required('Este campo es requerido')
  });

  handleButton = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }

  render() {
    const { initialValuesForm, handleButton, schemaValidation } = this;
    
    return (
      <div>
        <h1>Datos personales</h1>
        <Formik
          initialValues={ initialValuesForm }
          onSubmit={ handleButton }
          validationSchema={ schemaValidation }
          render={ props => <FormDatosPersonales {...props} />} />
      </div>
    );
  }
  
}

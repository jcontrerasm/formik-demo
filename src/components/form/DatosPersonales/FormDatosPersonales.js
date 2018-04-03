import React, { Component } from 'react';
import CustomTooltip from './../../commons/CustomTooltip';
import InputForm from './../../commons/InputForm';
import SelectForm from './../../commons/SelectForm';

export default class FormDatosPersonales extends Component {

  constructor(props) {
    super(props);
    this.arrElements = [
      { text: "Seleccionar", value: "" },
      { text: "DNI", value: "1" },
      { text: "Carnet de extranjeria", value: "2" },
    ];
  }

  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
    } = this.props;

    const propsForm = {
      values,
      errors,
      touched,
      handleChange,
      handleBlur
    };

    const propsTooltip = { touched, errors };

    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <CustomTooltip {...propsTooltip} item="firstname">
            <InputForm {...propsForm} name="firstname" type="text" text="Nombre: "/>
          </CustomTooltip>
        </div>
        <div>
          <CustomTooltip {...propsTooltip} item="document">
            <SelectForm {...propsForm}
              name="document"
              text="Documento de identidad: "
              data={ this.arrElements }/>
          </CustomTooltip>
        </div>
        <div>
          <CustomTooltip {...propsTooltip} item="numberdoc">
            <InputForm {...propsForm} name="numberdoc" type="text" text="Número: "/>
          </CustomTooltip>
        </div>
        <div>
          <CustomTooltip {...propsTooltip} item="email">
            <InputForm {...propsForm} name="email" type="email" text="Email: "/>
          </CustomTooltip>
        </div>
        <p>
          <button type="button" onClick={ handleReset }>Cancelar</button>
          <button type="submit" disabled={ isSubmitting }>Guardar</button>
        </p>
      </form>
    );
  }

}
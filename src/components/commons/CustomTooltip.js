import React, { Component } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

export default class CustomTooltip extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      touched,
      errors,
      duration,
      open,
      position,
      title,
      children,
      item } = this.props;

    return (
      <Tooltip
        duration = { duration }
        open={ errors[item] && touched[item] ? true : false }
        position={ position }
        title={ errors[item] }
        >
        { children }
      </Tooltip>
    );
  }
  
}

CustomTooltip.defaultProps = {
  duration: 500,
  open: false,
  position: 'top',
  title: 'Mensaje de validación'
}
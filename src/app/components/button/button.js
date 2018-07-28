import React from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

const Button = ({
  classes,
  type,
  className,
  disabled,
  children,
  ...props
}) => (
  <button
    type={ type }
    className={ `${classes.button} ${className || ''}` }
    disabled={ disabled }
    { ...props }
  >
    { children }
  </button>
);

export default injectSheet (styles)(Button);
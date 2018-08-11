import React from 'react';
import injectSheet from 'react-jss';

import SettingsForm from 'containers/settings-form';

import styles from './styles';

const Settings = ({
  classes
}) => (
  <div className={ classes.wrapper }>
    <SettingsForm />
  </div>
);

export default injectSheet(styles)(Settings);
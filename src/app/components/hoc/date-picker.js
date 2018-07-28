import React, { Component } from 'react';
import DayPicker from 'react-day-picker';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function withStyledDatePicker(DatePicker) {
  class StyledDatePicker extends Component {
    render() {
      const datePickerDefaultClassNames = DayPicker.defaultProps.classNames;
      const datePickerProps = this.props.dayPickerProps;

      const classNames = Object.keys(datePickerDefaultClassNames)
        .reduce((classNames, containerName) => {
          if (!datePickerProps.classNames[containerName]) {
            classNames[containerName] = datePickerDefaultClassNames[containerName];
          } else {
            classNames[containerName] = `${datePickerDefaultClassNames[containerName]} ${datePickerProps.classNames[containerName]}`;
          }

          return classNames;
        }, {});

      return (
        <DatePicker
          {...this.props}
          dayPickerProps={ {
            ...datePickerProps,
            classNames
          } }
        />
      );
    }
  }

  StyledDatePicker.displayName = `StyledDatePicker(${getDisplayName(DatePicker)})`;

  return StyledDatePicker;
}

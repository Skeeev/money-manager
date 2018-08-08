export default {
  transactionForm: {
    textAlign: "center"
  },
  transactionFormRow: {
    marginBottom: "15px",
    textAlign: "left"
  },
  transactionFormFieldWrap: {
    marginTop: "10px"
  },
  transactionFormLabel: {
    font: "700 1.2em OpenSans, sans-serif",
    cursor: "pointer",
    transition: "color .3s",
    "&:hover, &:active, &:focus": {
      color: "#e67d86"
    }
  },
  transactionCategorySelect: {
    maxWidth: "350px",
    marginTop: "10px"
  },
  transactionFormSubmitButton: {
    width: "250px",
    marginTop: "40px",
    padding: "15px 25px",
    fontSize: "1.5em",
    transition: "border-color .3s, color .3s, background-color .3s",
    cursor: "pointer",
    "&:hover, &:active, &:focus": {
      borderColor: "transparent",
      outline: "0",
      color: "#fff",
      backgroundColor: "#e67d86"
    }
  },
  transactionFormField: {
    width: "350px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    padding: "14px 8px",
    borderRadius: "4px",
    "&:focus": {
      outlineColor: "#e67d86"
    }
  },
  transactionFormFieldDatePicker: {
    maxWidth: "280px"
  },
  transactionFormFieldDescription: {
    height: "100px",
    padding: "10px 8px",
    resize: "none"
  },
  transactionFormDatePickerWrapper: {
    position: "relative"
  },
  transactionFormDatePickerOverlay: {
    position: "absolute",
    top: "8px",
    left: "0",
    zIndex: "1",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)"
  },
  transactionDatePickerDay: {
    transition: "color .3s, background-color .3s",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#e67d8666 !important"
    }
  },
  transactionDatePickerSelectedDay: {
    color: "#fff",
    backgroundColor: "#e67d86"
  }
};
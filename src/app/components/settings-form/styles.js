export default {
  settingsFormRow: {
    marginBottom: "30px",
    textAlign: "left"
  },
  settingsFormLabel: {
    font: "700 1.2em OpenSans, sans-serif",
    cursor: "pointer",
    transition: "color .3s",
    "&:hover, &:active, &:focus": {
      color: "#e67d86"
    }
  },
  settingsFormField: {
    width: "350px",
    boxSizing: "border-box",
    border: "none",
    padding: "13px 8px",
    borderRadius: "4px",
    "&:focus": {
      outlineColor: "#e67d86"
    },
    lineHeight: "1"
  },
  settingsFormFieldWrap: {
    display: "flex",
    marginTop: "10px",
    alignItems: "center"
  },
  settingsFormAddCategoryButton: {
    width: "120px",
    marginLeft: "52px",
    padding: "13px 20px",
    border: "none",
    fontSize: "1.2em",
    backgroundColor: "#fff",
    transition: "color .3s, background-color .3s",
    cursor: "pointer",
    "&:hover, &:active, &:focus": {
      outline: "0",
      color: "#fff",
      backgroundColor: "#e67d86"
    }
  },
  settingsFormCategoriesList: {
    width: "70%",
    boxSizing: "border-box",
    padding: "30px",
    borderRadius: "4px",
    background: "#fff"
  },
  settingsFormCategoryItem: {
    display: "flex",
    marginBottom: "5px",
    justifyContent: "space-between",
    "&:last-child": {
      marginBottom: "0",
    }
  },
  settingsFormCategoryItemName: {
    maxWidth: "60%",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  settingsFormCategoryItemTransactions: {
    fontWeight: "600"
  }
};
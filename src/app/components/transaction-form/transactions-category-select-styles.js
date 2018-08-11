export default {
  control: (base, state) => ({
    ...base,
    maxWidth: "350px",
    marginTop: "10px",
    borderColor: "#ccc",
    outline: state.isFocused ? "1px solid #e67d86" : "none",
    outlineStyle: state.isFocused ? "auto" : "none",
    backgroundColor: "initial",
    boxShadow: "none",
    "&:hover": {}
  }),
  valueContainer: base => ({
    ...base,
    padding: "8px"
  }),
  menu: base => ({
    ...base,
    maxWidth: "350px"
  }),
  option: (base, state) => {
    let backgroundColor;
    let color;

    if (state.isSelected) {
      color = "#fff";
      backgroundColor = "#e67d86";
    } else if (state.isFocused) {
      color = "#fff";
      backgroundColor = "rgba(230, 125, 134, 0.6)";
    } else {
      color = "#000";
      backgroundColor = "transparent";
    }

    return {
      ...base,
      color,
      backgroundColor,
      padding: "10px 12px",
      ":active": {
        color: "#fff",
        backgroundColor: "#e67d86"
      }
    };
  }
};

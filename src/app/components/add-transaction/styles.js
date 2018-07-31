export default {
  addNewTransactionButton: {
    display: "flex",
    padding: "10px 20px",
    alignItems: "center",
    border: 'none',
    boxShadow: "0px 3px 5px 1px #e67d8638",
    color: "#fff",
    backgroundColor: "#e67d86",
    transition: "box-shadow .3s, color .3s, background-color .3s",
    "&:hover, &:active, &:focus": {
      outline: "0",
      boxShadow: "0px 4px 9px 1px #e67d8669"
    }
  },
  addTransactionIcon: {
    marginRight: "5px",
    font: {
      weight: "700",
      size: "1.3em"
    }
  }
}
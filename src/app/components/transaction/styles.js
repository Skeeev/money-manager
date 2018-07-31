export default {
  transactionsSectionListItem: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    padding: "20px 0",
    "&:last-child": {
      marginBottom: "0"
    },
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "0",
      right: "0",
      left: "0",
      width: "100%",
      height: "1px",
      background: "linear-gradient(to right, #ffffff 0%,#dbdbdb 40%,#dbdbdb 45%,#dbdbdb 55%,#dbdbdb 60%,#ffffff 99%)"
    }
  },
  transactionsSectionItemCategory: {
    minWidth: "130px",
    fontWeight: "600",
    textAlign: "center",
    whiteSpace: "nowrap"
  },
  transactionsSectionItemDate: {
    minWidth: "100px",
    marginLeft: "5%",
    fontStyle: "italic",
    textAlign: "center"
  },
  transactionsSectionItemDescription: {
    width: "100%",
    marginLeft: "5%"
  },
  transactionsSectionItemAmount: {
    minWidth: "150px",
    margin: "0 7% 0 auto",
    textAlign: "center"
  },
  transactionsListItemControls: {
    position: "absolute",
    display: "flex",
    top: "0",
    right: "0"
  },
  transactionsListItemControl: {
    marginRight: "15px",
    color: "#ccc",
    cursor: "pointer",
    "&:last-child": {
      marginRight: "0"
    },
    "& $transactionsListControlIcon:hover:before,& $transactionsListControlIcon:active:before, & $transactionsListControlIcon:focus:before": {
      color: "#e67d86"
    }
  },
  transactionsListControlIcon: {
    "&:before": {
      transition: "color .3s"
    }
  }
}
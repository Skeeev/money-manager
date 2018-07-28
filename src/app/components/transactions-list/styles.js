export default {
  transactionsSection: {
    marginTop: "40px"
  },
  transactionsSectionList: {
    minHeight: "724px",
    maxHeight: "724px",
    overflowY: "auto",
    padding: "20px",
    borderRadius: "4px",
    boxSizing: "border-box",
    background: "#fff"
  },
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
    minWidth: "120px",
    fontWeight: "600",
    textAlign: "center"
  },
  transactionsSectionItemDate: {
    minWidth: "100px",
    marginLeft: "5%",
    fontStyle: "italic",
    textAlign: "center"
  },
  transactionsSectionItemDescription: {
    marginLeft: "5%",
    paddingRight: "7%"
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
};

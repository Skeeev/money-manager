export default {
  confirmDialog: {
    display: "none",
    position: "fixed",
    top: "20%",
    left: "50%",
    width: "400px",
    height: "200px",
    transform: "translateX(-50%)",
    boxSizing: "border-box",
    padding: "25px",
    borderRadius: "4px",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    font: {
      weight: "700",
      size: "1.4em"
    },
    background: "#fff"
  },
  confirmDialogOpen: {
    display: "flex"
  },
  confirmOverlay: {
    display: "none",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    backgroundColor: "rgba(0, 0, 0, .3)"
  },
  confirmOverlayOpen: {
    display: "block"
  },
  confirmButtons: {
    display: "flex",
    justifyContent: "space-around"
  },
  confirmButton: {
    padding: "15px 45px",
    transition: "color .3s, background-color .3s",
    "&:hover, &:active, &:focus": {
      borderColor: "transparent",
      outline: "0",
      color: "#fff",
      backgroundColor: "#e67d86"
    }
  }
};
export default {
  modalDialog: {
    display: "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    minWidth: "800px",
    minHeight: "500px",
    transform: "translate(-50%, -50%)",
    borderRadius: "4px",
    background: "#fff"
  },
  modalDialogOpen: {
    display: "block"
  },
  modalOverlay: {
    display: "none",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    backgroundColor: "rgba(0, 0, 0, .3)"
  },
  modalOverlayOpen: {
    display: "block"
  },
  modalContent: {},
  modalBody: {
    padding: "40px"
  },
  modalTitle: {
    marginBottom: "20px",
    textAlign: "center"
  },
  modalControls: {},
  modalCloseButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    transition: "transform .3s",
    '&:hover, &:active, &:focus': {
      transform: "scale(1.2)"
    },
    '&:hover:before, &:active:before, &:focus:before': {
      color: "#e67d86"
    },
    '&:before': {
      color: "#424242",
      fontSize: "1.2em",
      transition: "color .3s",
    }
  },
  modalSubmitButton: {}
};
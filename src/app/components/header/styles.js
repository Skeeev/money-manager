export default {
  header: {
    display: "flex",
    padding: "0 20px",
    borderBottom: "1px solid #e5e5e5",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 5px 10px 0 rgba(48, 82, 120, .03)"
  },
  headerLogoLink: {
    flexBasis: "200px",
    fontSize: "0",
    transition: "transform .3s",
    "&:hover, &:active, &:focus": {
      transform: "scale(1.05)"
    }
  },
  headerLogo: {
    width: "100%"
  },
  headerNav: {
    display: "flex",
    alignItems: "center"
  },
  headerNavList: {
    display: "flex",
    padding: "0",
    listStyle: "none"
  },
  headerNavListItem: {
    padding: "20px 0",
  },
  headerNavLink: {
    position: "relative",
    padding: "21px 35px",
    color: "#424242",
    fontWeight: "600",
    transition: "color .3s",
    "&:hover, &:active, &:focus": {
      color: "#e67d86"
    }
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  headerNavLinkActive: {
    color: "#e67d86",
    "&:after": {
      position: "absolute",
      content: "''",
      width: "100%",
      height: "3px",
      bottom: "0",
      left: "0",
      backgroundColor: "#e67d86",
      animation: 'fadeIn .8s'
    }
  }
};
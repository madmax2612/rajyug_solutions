import {
  defaultFont,
  dangerColor,
  whiteColor
} from "assets/jss/material-dashboard-react.js";

import dropdownStyle from "assets/jss/material-dashboard-react/dropdownStyle.js";

const headerLinksStyle = theme => ({
  ...dropdownStyle(theme),
  search: {
    "& > div": {
      marginTop: "0"
    },
    
  },
  linkText: {
    zIndex: "4",
    ...defaultFont,
    fontSize: "14px",
    margin: "0px"
  },
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%"
      }
    }
  },
  

  
  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "9px",
      border: "1px solid " + whiteColor,
      right: "8px",
      fontSize: "14px",
      background: '#bf891b',
      color: whiteColor,
      minWidth: "8px",
      height: "8px",
      borderRadius: "8px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block"
    },
    [theme.breakpoints.down("lg")]: {
      ...defaultFont,
      fontSize: "14px",
      marginRight: "8px"
    }
  },
  manager: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    display: "inline-block",
     margin: "6px 15px 15px 15px"
  },
  searchWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available",
      margin: "10px 5px 0"
    },
    display: "inline-block"
  }
});

export default headerLinksStyle;

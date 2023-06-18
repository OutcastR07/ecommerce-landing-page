import { AppBar, IconButton, InputBase, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  FavoriteBorder as FavoriteBorderIcon,
  Lock as LockIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React, { useRef } from "react";
import Logo from "../../photo/Logo.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#1E66FF",
  },
  searchContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  searchInput: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "999px",
    margin: "4px",
    padding: "2px 12px",
    width: "60%",
    "& input": {
      border: "none",
      outline: "none",
      width: "100%",
      padding: "4px 12px",
    },
  },
  searchIcon: {
    position: "absolute",
    top: "50%",
    right: "0px",
    transform: "translateY(-50%)",
    backgroundColor: "#4DC3F7",
    padding: "9px 18px 9px 18px",
    borderRadius: "999px 999px 999px 999px",
  },
  accountText: {
    color: "white",
    marginRight: "8px",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    inputRef.current.focus();
  };

  const handleSearchBlur = () => {
    inputRef.current.blur();
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div>
          <img
            src={Logo}
            alt="Logo"
            width="84px"
            height="84px"
            style={{ marginRight: "8px" }}
          />
        </div>

        <div className={classes.searchContainer} onClick={handleSearchClick}>
          <div className={classes.searchInput}>
            <InputBase
              placeholder="Search SnipShop.com"
              className={`${classes.searchInput}`}
              onFocus={handleSearchClick}
              onBlur={handleSearchBlur}
              inputRef={inputRef}
              focusVisible={false}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </div>

        <div className="flex items-center text-sm">
          <IconButton color="inherit">
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <span className={classes.accountText}>Account</span>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
          <span className={classes.accountText}>My Item</span>
          <IconButton color="inherit">
            <LockIcon />
          </IconButton>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

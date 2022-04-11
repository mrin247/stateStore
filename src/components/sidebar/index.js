import {
  AppBar,
  Box,
  Button,
  createMuiTheme,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/system";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LogoutIcon from "@mui/icons-material/Logout";
import { signout } from "../../actions/authActions";

const drawerWidth = 240;

/**
 * @author
 * @function SideBar
 **/

const useStyles = makeStyles({
  paper: {
    background: "#18334e",
    color: "whitesmoke",
  },
  root: {
    "&$selected": {
      backgroundColor: "rgb(0 30 60)",
      "&:hover": {
        backgroundColor: "rgb(41, 78, 114)",
      },
    },
    "&:hover": {
      backgroundColor: "rgb(41, 78, 114)",
    },
  },
  selected: {},
});

export const SideBar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const styles = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const logout = (e) => {
    e.preventDefault();
    dispatch(signout());
    navigate("/signin");
  };

  return (
    <Drawer
      classes={{ paper: styles.paper }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          color: "whitesmoke",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Toolbar>
          <Button sx={{ mr: 4, color: "whitesmoke" }}>
            <ManageAccountsIcon />
            <Typography pl={1} variant="h6" noWrap component="div">
              {auth.user.firstName}
            </Typography>
          </Button>
        </Toolbar>
      </Box>

      <Toolbar>
        <Box
          sx={{
            color: "whitesmoke",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* //TODO: Chate With Icon */}
          <Typography ml={4} v ariant="h5" noWrap>
            STATE FRONT
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        <ListItem
          button
          classes={{ root: styles.root, selected: styles.selected }}
          selected={location.pathname === "/" ? true : false}
          onClick={() => navigate("/")}
        >
          <ListItemIcon>
            <DashboardIcon sx={{ color: "whitesmoke" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* <ListItem
          button
          classes={{ root: styles.root, selected: styles.selected }}
          selected={location.pathname === "/customers" ? true : false}
          onClick={() => navigate("/customers")}
        >
          <ListItemIcon>
            <PeopleIcon sx={{ color: "whitesmoke" }} />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem> */}

        <ListItem
          button
          classes={{ root: styles.root, selected: styles.selected }}
          selected={location.pathname === "/products" ? true : false}
          onClick={() => navigate("/products")}
        >
          <ListItemIcon>
            <InventoryIcon sx={{ color: "whitesmoke" }} />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>

        <ListItem
          button
          classes={{ root: styles.root, selected: styles.selected }}
          selected={location.pathname === "/orders" ? true : false}
          onClick={() => navigate("/orders")}
        >
          <ListItemIcon>
            <LocalShippingIcon sx={{ color: "whitesmoke" }} />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
      </List>

      <List sx={{ mt: 45 }}>
        <ListItem
          button
          classes={{ root: styles.root, selected: styles.selected }}
          onClick={logout}
        >
          <ListItemIcon>
            <LogoutIcon sx={{ color: "red", fontWeight: 900 }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

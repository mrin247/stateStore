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
  const styles = useStyles();
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
              Account
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
          selected={true}
        >
          <ListItemIcon>
            <DashboardIcon sx={{ color: "whitesmoke" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          classes={{ root: styles.root, selected: styles.selected }}
        >
          <ListItemIcon>
            <PeopleIcon sx={{ color: "whitesmoke" }} />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>

        <ListItem
          button
          classes={{ root: styles.root, selected: styles.selected }}
        >
          <ListItemIcon>
            <InventoryIcon sx={{ color: "whitesmoke" }} />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>

        <ListItem
          button
          classes={{ root: styles.root, selected: styles.selected }}
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

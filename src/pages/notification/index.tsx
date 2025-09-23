import React from "react";
import LayoutUser from "@/components/layout/layout-user";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { notification } from "@/common/notification";

function Notification() {
  return (
    <LayoutUser visibilityBack={true} titleBack="Notification">
      <List sx={{ mb: 2 }}>
        {notification.map(({ id, primary, secondary, person }) => (
          <React.Fragment key={id}>
            {id === 1 && (
              <ListSubheader sx={{ bgcolor: "background.paper" }}>
                Today
              </ListSubheader>
            )}
            {id === 3 && (
              <ListSubheader sx={{ bgcolor: "background.paper" }}>
                Yesterday
              </ListSubheader>
            )}
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItemButton>
          </React.Fragment>
        ))}
      </List>
    </LayoutUser>
  );
}

export default Notification;

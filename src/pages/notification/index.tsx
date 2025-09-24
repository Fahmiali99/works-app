import React from "react";
import LayoutUser from "@/components/layout/layout-user";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Badge from "@mui/material/Badge";
import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { notification } from "@/common/notification";

const statusColors = {
  paid: "#22C55E",
  rejected: "#EF4444",
  "in-progress": "#3B82F6",
  approved: "#22C55E",
  "in-review": "#3B82F6",
};

const statusIcons = {
  paid: "material-symbols:check",
  rejected: "material-symbols:close",
  "in-progress": "si:arrow-right-fill",
  approved: "material-symbols:check",
  "in-review": "si:arrow-right-fill",
};

const StyledBadge = styled(Badge)<{ badgecolor: string }>(({ badgecolor }) => ({
  "& .MuiBadge-badge": {
    width: 27,
    height: 27,
    borderRadius: "100%",
    position: "absolute",
    top: 55,
    right: 5,
    backgroundColor: badgecolor,
  },
}));

function Notification() {
  return (
    <LayoutUser visibilityBack={true} titleBack="Notification">
      <List className="!space-y-0 !pt-0">
        {notification.map((item, idx) => (
          <ListItemButton
            key={idx}
            sx={{
              backgroundColor: "white",
              gap: 3,
              display: "flex",
              alignItems: "flex-start",
              py: 2,
              background: item.exception ? "#d7e5ff" : null,
            }}
          >
            <StyledBadge
              overlap="circular"
              variant="standard"
              badgecolor={statusColors[item.status]}
              badgeContent={
                <Icon
                  icon={statusIcons[item.status]}
                  width={100}
                  height={100}
                  className="text-white"
                />
              }
            >
              <div className="w-16 h-16 rounded-xl flex justify-center items-center bg-linear-to-r from-[#ef2723] via-[#d81b45] to-[#c10f65]">
                <Image
                  src={item.image}
                  width={40}
                  height={40}
                  alt="icon"
                  className="rounded-xl"
                />
              </div>
            </StyledBadge>

            <ListItemText
              sx={{
                flex: 1,
                marginTop: "4px",
              }}
              primary={
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography component="div" variant="body1" fontWeight="bold">
                    {item.type}
                  </Typography>
                </Box>
              }
              secondary={
                <Typography
                  component="div"
                  variant="body2"
                  color="text.secondary"
                >
                  {item.description}
                </Typography>
              }
            />
            <Typography
              className="whitespace-nowrap"
              variant="caption"
              color="text.secondary"
              sx={{ alignSelf: "flex-start", marginTop: "4px" }}
            >
              {item.date}
            </Typography>
          </ListItemButton>
        ))}
      </List>
    </LayoutUser>
  );
}

export default Notification;

import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { navbarMenus } from "@/common/navbar-menu";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -35,
  left: "50%",
  transform: "translateX(-50%)",
});

const CenterBox = styled(Box)({
  position: "relative",
  width: "calc(100% / 5)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 30,
});

export default function NavigationUser() {
  const fabIndex = 2;

  return (
    <React.Fragment>
      <AppBar
        position="absolute"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          width: "100%",
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            position: "relative",
          }}
        >
          <div className=" flex w-full justify-between p-0">
            {navbarMenus.map((menu, index) => (
              <React.Fragment key={menu.name}>
                {index === fabIndex && (
                  <CenterBox>
                    <StyledFab
                      color="error"
                      aria-label="checkout"
                      sx={{ backgroundColor: "#ef4444" }}
                    >
                      <Icon
                        icon="mdi:logout"
                        width={28}
                        height={28}
                        className="text-white"
                      />
                    </StyledFab>
                    <span
                      className="text-xs mt-0 font-medium"
                      style={{ color: "#ef4444" }}
                    >
                      Check Out
                    </span>
                  </CenterBox>
                )}
                <Link href={menu.link}>
                  <IconButton
                    color="inherit"
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      color: index === 0 ? "#ef4444" : "#a1a1a1",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#ef4444",
                      },
                    }}
                  >
                    <Icon
                      icon={menu.icon}
                      width={24}
                      height={24}
                      className="mb-1"
                    />
                    <span className="text-xs">{menu.name}</span>
                  </IconButton>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

import React from "react";
import NavigationUser from "./navigation-user";
import { IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function LayoutUser({
  children,
  visibilityBack,
  visibilityNavbar,
  titleBack,
}: {
  children: React.ReactNode;
  visibilityBack?: boolean;
  visibilityNavbar?: boolean;
  titleBack?: string;
}) {
  const route = useRouter();

  const handleBack = () => {
    route.back();
  };
  return (
    <div className=" flex justify-center">
      <div className="relative w-[480px] h-screen bg-white flex flex-col shadow border-red-500">
        {visibilityBack && (
          <div className="flex items-center justify-start px-4 h-16 space-x-10">
            <IconButton onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ margin: 0, pl: 1 }}
              className="text-red-500"
            >
              {titleBack || null}
            </Typography>
          </div>
        )}

        <main className="flex-1 overflow-y-auto pb-16">{children}</main>

        {visibilityNavbar && (
          <div className="absolute bottom-0 left-0 w-full bg-white border-t border-t-gray-300 shadow">
            <NavigationUser />
          </div>
        )}
      </div>
    </div>
  );
}

export default LayoutUser;

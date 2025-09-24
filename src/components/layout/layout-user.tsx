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
          <div className="z-5 flex items-center justify-start px-4 h-16 space-x-10 shadow-[0_2px_4px_-2px_rgba(0,0,0,0.2)]">
            <IconButton onClick={handleBack}>
              <ArrowBackIcon className="text-black" />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              className="text-red-500 !font-semibold pl-2"
            >
              {titleBack || null}
            </Typography>
          </div>
        )}

        <main className="z-0 flex-1 overflow-y-auto pb-16">{children}</main>

        {visibilityNavbar && (
          <div className="z-5 absolute bottom-0 left-0 w-full bg-white border-t border-t-gray-300 shadow">
            <NavigationUser />
          </div>
        )}
      </div>
    </div>
  );
}

export default LayoutUser;

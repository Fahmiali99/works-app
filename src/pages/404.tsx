import React from "react";
import LayoutUser from "@/components/layout/layout-user";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
function NotFound() {
  return (
    <LayoutUser>
      <div className="h-screen flex justify-center items-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Image
              src="/assets/error404.webp"
              width={300}
              height={300}
              alt="notfound"
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">
              Sorry, the page is not available!
            </h1>
            <div className="w-full flex justify-center">
              <Button
                variant="contained"
                href="/"
                className="flex justify-center bg-linear-to-r from-[#ef2723] via-[#d81b45] to-[#c10f65] !rounded-lg"
                size="medium"
                sx={{ textTransform: "none" }}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
}

export default NotFound;

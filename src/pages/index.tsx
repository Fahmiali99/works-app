import LayoutUser from "@/components/layout/layout-user";
import React from "react";
import Activity from "@/components/home/activity";
import News from "@/components/home/news";
import Online from "@/components/home/online";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Dashboard() {
  return (
    <LayoutUser visibilityNavbar={true}>
      <div className=" space-y-6">
        <Activity />
        <div className="relative">
          <News />
          <Online />
        </div>
      </div>
    </LayoutUser>
  );
}

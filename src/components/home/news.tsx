import React from "react";
import SwipeToSlide from "../swipe-to-slide";
import { users } from "@/common/home";

function News() {
  return (
    <div>
      <div className="px-6">
        <h1 className="font-bold text-lg">PCS News</h1>
      </div>
      <SwipeToSlide data={users} />
    </div>
  );
}

export default News;

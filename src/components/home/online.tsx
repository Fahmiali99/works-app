import { onlineUsers } from "@/common/home";
import React from "react";

function Online() {
  const colorPalette = [
    "bg-purple-300",
    "bg-yellow-400",
    "bg-stone-300",
    "bg-sky-300",
    "bg-amber-300",
    "bg-slate-400",
    "bg-red-600",
    "bg-red-700",
  ];

  const additionalUsers = 8;

  return (
    <div className="relative -bottom-82 md:-bottom-72 pt-0 md:pt-0 pb-20 px-0">
      <h1 className="font-bold text-lg px-6">Online</h1>
      <div className="w-full items-center bg-white p-6">
        <div className="rounded-3xl shadow-lg p-2 md:p-6 max-w-4xl ">
          <div className="flex items-end justify-center -space-x-2 md:-space-x-4">
            {onlineUsers.map((user, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center group transition-transform hover:scale-105 hover:-translate-y-2"
              >
                <div
                  className={`w-[40px] md:w-14 h-[40px] md:h-14 ${
                    colorPalette[idx % colorPalette.length]
                  } rounded-full flex items-center justify-center border-2 border-white shadow-lg relative overflow-hidden`}
                >
                  <img
                    src={user.images}
                    alt={user.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center mt-3">
                  <div className="font-semibold text-gray-800 text-xs">
                    {user.name}
                  </div>
                  <div className="text-gray-500 text-xs">{user.location}</div>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-center group transition-transform hover:scale-105 hover:-translate-y-2">
              <div className="w-[40px] h-[40px] md:w-14 md:h-14  bg-linear-to-r from-[#ef2723] via-[#d81b45] to-[#c10f65] rounded-full flex flex-col items-center justify-center border-2 border-white shadow-lg">
                <span className="text-white font-bold text-xs">
                  {additionalUsers}
                </span>
                <span className="text-white font-semibold text-xs">more</span>
              </div>
              <div className="text-center mt-3">
                <div className="font-semibold text-gray-800 text-xs">More</div>
                <div className="text-xs text-white">.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Online;

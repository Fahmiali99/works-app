import React from "react";
import Badge from "@mui/material/Badge";
import { Icon } from "@iconify/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import Link from "next/link";
const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    width: 10,
    height: 10,
    borderRadius: "100%",
    positional: "absolute",
    top: 5,
    right: 5,
    border: "2px solid white",
    backgroundColor: "#F05252",
  },
});

function Activity() {
  const profileActivity = {
    user: {
      name: "Tabay",
      position: "UI/UX Designer",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
      memberSince: "2021-06-01",
    },
    location: {
      office: "Kantor Sahid",
      status: "ICO",
    },
    todaysActivity: [
      {
        time: "08:30",
        activity: "Check-in",
        icon: "tabler:clock-hour-9",
        status: false,
      },
      {
        time: "03:00:00",
        activity: "Working Hours",
        icon: "carbon:rotate-clockwise",
        status: true,
      },
      {
        time: null,
        activity: "Check Out",
        icon: "tabler:stopwatch",
        status: false,
      },
    ],
  };
  return (
    <div className="space-y-6 px-6">
      <div className=" flex items-center justify-between py-3">
        <h1 className=" font-bold text-red-500 text-2xl">KerjaYuk!</h1>
        <StyledBadge color="secondary" overlap="circular" variant="dot">
          <Link href="/notification">
            <Icon
              icon="carbon:notification"
              width={24}
              height={24}
              className="text-black"
            />
          </Link>
        </StyledBadge>
      </div>
      <div>
        <h1>Hi, Good Morning!</h1>
        <div className=" mt-4 space-y-6 rounded-2xl bg-linear-to-r from-[#ef2723] via-[#d81b45] to-[#c10f65] p-4">
          <div className="flex justify-between">
            <div className="flex gap-5">
              <div className="flex justify-center items-center rounded-full p-3 bg-[#434a5b]">
                <Image
                  src={profileActivity.user.image}
                  width={60}
                  height={60}
                  alt="user"
                />
              </div>
              <div>
                <h1 className="font-semibold text-white">
                  {profileActivity.user.name}
                </h1>
                <p className="italic text-sm md:text-base text-white">
                  {profileActivity.user.position}
                </p>
              </div>
            </div>
            <div>
              <p className="text-end italic text-xs text-white">Member since</p>
              <h1 className="text-end text-sm md:text-base font-semibold text-white">
                {format(
                  parseISO(profileActivity.user.memberSince),
                  "dd MMMM yyyy"
                )}
              </h1>
            </div>
          </div>

          <div>
            <p className="text-xs text-white">Location</p>
            <div className="flex justify-between">
              <h1 className=" font-semibold text-sm md:text-base text-white">
                {profileActivity.location.office}
              </h1>
              <p className="text-xs italic text-white">
                {profileActivity.location.status}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-semibold">Todays activity</h1>
        <div className="grid grid-cols-3 gap-3">
          {profileActivity.todaysActivity.map((activity, idx) => (
            <div key={idx}>
              <div className="space-y-2">
                <div className=" flex justify-center items-center">
                  <Icon
                    icon={activity.icon}
                    width={30}
                    height={30}
                    className="text-red-500"
                  />
                </div>
                <div className="space-y-0.5">
                  <div>
                    {activity.time ? (
                      <h1
                        className={`text-center font-bold text-sm md:text-base ${
                          activity.status ? "text-red-500" : "text-gray-600"
                        }`}
                      >
                        {activity.time}
                      </h1>
                    ) : (
                      <div className="text-center font-bold text-sm md:text-base">
                        --:--
                      </div>
                    )}
                  </div>
                  <h1 className="text-center text-sm text-gray-600">
                    {activity.activity}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activity;

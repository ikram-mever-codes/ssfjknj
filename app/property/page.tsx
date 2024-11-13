"use client";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { GridMoreVertIcon } from "@mui/x-data-grid";
import MWorkOrderCard from "components/Property/MWorkOrderCard";
import PackageCard from "components/Property/PackageCard";
import Link from "next/link";
import React, { useState } from "react";

type ProgressCircleProps = {
  total: number;
  completed: number;
};

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  total,
  completed,
}) => {
  const progress = (completed / total) * 100;
  const radius = 45;
  const strokeWidth = 4;
  const circleLength = 2 * Math.PI * radius;
  const strokeDasharray = circleLength;
  const strokeDashoffset = circleLength - (progress / 100) * circleLength;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <svg width={120} height={120} viewBox="0 0 120 120" className="rotate-90">
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#309bcf"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#152c47"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        className="transition-all duration-500"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        stroke="#fff"
        strokeWidth="1px"
        dy=".3em"
        className="font-secondary text-white text-lg"
        transform="rotate(-90 60 60)"
      >
        {Math.round(progress)}%
      </text>
    </svg>
  );
};

const page: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMarkComplete = () => {
    console.log("Mark as Complete");
    handleMenuClose();
  };

  const handleAssignToStaff = () => {
    console.log("Assign to Staff");
    handleMenuClose();
  };
  return (
    <div className="w-full h-[83vh] overflow-y-auto overflow-x-hidden scroll-bar flex justify-start items-center p-4 gap-3 flex-col">
      <div className="w-full h-max flex justify-start items-center gap-4 flex-col">
        <div className="w-full flex justify-between items-start border-b border-solid pb-2">
          <h4 className="font-secondary text-text text-[20px] font-semibold">
            Work Orders
          </h4>
          <Link
            href={"/property/work-orders"}
            className="font-secondary text-[16px] font-medium"
          >
            View All
          </Link>
        </div>
        <div className="w-full h-max flex justify-start items-start gap-4">
          <div className="w-[12rem] h-full rounded-xl bg-primary p-4">
            <div className="w-full h">
              <div className="text-white font-secondary ">Work Orders</div>
              <div className="my-4 text-white font-secondary font-bold text-[35px] w-full flex justify-center items-center flex-col">
                {" "}
                7<span className="text-text2 font-normal text-[14px]">New</span>
              </div>
            </div>
            <div className=" w-full flex justify-start items-center ">
              <ProgressCircle total={10} completed={7} />
              <div className="text-[14px] flex flex-col text-text2">
                <strong className="text-white font-normal text-[25px]">
                  100
                </strong>
                Total
              </div>
            </div>
          </div>
          <div className="relative w-full  h-full flex justify-between flex-col py-2">
            <div className="text-black mb-2 text-[18px] font-secondary font-semibold ">
              Upcoming
            </div>
            <div className="w-max  scroll-bar flex justify-start items-center gap-4 ">
              {[1, 2, 3, 4].map(() => {
                return (
                  <div className="w-[20rem] cursor-pointer flex justify-between items-center flex-col  py-2 gap-4 px-0 rounded-xl h-full border-2 border-solid">
                    <Link href={`/property/work-orders/${"ff3rf"}`}>
                      <div className="w-full flex justify-between items-center border-b border-solid pb-1 px-3">
                        <div className="text-[14px] text-text2 rounded-full w-max h-max px-2 py-2 mb-1 bg-selected">
                          Unit# 106
                        </div>
                        <div className="bg-orange-400/20 text-orange-700 rounded-full w-max h-[2.2rem] text-[14px] flex justify-center items-center px-3">
                          New
                        </div>
                      </div>
                      <div className="flex justify-between items-center gap-1 flex-col px-3">
                        {/* <Image
                      src={image}
                      alt={title}
                      className="w-full h-max max-h-[12rem] rounded-lg object-cover object-center"
                      width={500}
                      height={500}
                      /> */}

                        <h2 className=" mt-2 w-full text-left text-[18px] font-semibold">
                          {"Fan and Lightning Issues"}
                        </h2>
                        <div className="text-[14px] text-text2 font-light font-secondary">
                          {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laudantium vel culpa dolorem repellendus rerum temporibus neque, modi quo consequuntur.".substring(
                            0,
                            100
                          )}
                          ...
                        </div>
                      </div>
                      <div className="flex justify-between items-center w-full px-3 mt-2">
                        <div className="flex justify-start items-center gap-2">
                          <Avatar src="/profile.jpg" />{" "}
                          <div>
                            <p className="text-[14px] text-black">IKRAM KHAN</p>
                            <p className="text-[12px] text-text2">
                              ikramxpakistan@gmail.com
                            </p>
                          </div>
                        </div>
                        <div className="text-[13px] text-text2">
                          {" "}
                          <button onClick={handleMenuOpen}>
                            <GridMoreVertIcon />
                          </button>
                          <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                          >
                            <MenuItem
                              onClick={handleMarkComplete}
                              className="mx-3 text-[15px]"
                            >
                              Mark as Complete
                            </MenuItem>
                            <MenuItem
                              onClick={handleAssignToStaff}
                              className="mx-3 text-[15px]"
                            >
                              Assign to Staff
                            </MenuItem>
                          </Menu>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-max flex justify-start items-center gap-4 flex-col">
        <div className="w-full flex justify-between items-start border-b border-solid pb-2">
          <h4 className="font-secondary text-text text-[20px] font-semibold">
            Packages
          </h4>
          <Link
            href={"/property/packages"}
            className="font-secondary text-[16px] font-medium"
          >
            View All
          </Link>
        </div>
        <div className="w-full h-max flex justify-start items-start gap-4">
          <div className="w-[20rem] h-full rounded-xl bg-primary p-4">
            <div className="w-[12rem] h-max">
              <div className="text-white font-secondary ">Work Orders</div>
              <div className="my-4 text-white font-secondary font-bold text-[35px] w-full flex justify-center items-center flex-col">
                {" "}
                7<span className="text-text2 font-normal text-[14px]">New</span>
              </div>
            </div>
            <div className=" w-full flex justify-start items-center ">
              <div className="text-[14px] flex flex-col text-text2 text-center">
                <strong className="text-white font-normal text-[25px]">
                  100
                </strong>
                Total
              </div>
            </div>
          </div>
          <div className="relative w-full  h-full flex justify-between flex-col py-2">
            <div className="text-black mb-2 text-[18px] font-secondary font-semibold ">
              Pending Pickup
            </div>
            <div className="w-max  scroll-bar flex justify-start items-center gap-4 ">
              {[1, 2, 3, 4].map(() => {
                return (
                  <PackageCard
                    createdAt={`16 Nov, 2024`}
                    avatar="prf.png"
                    fullName="Mark Zuckerberg"
                    packageId="332234"
                    contact="+92 123 235"
                    unitNo="106"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

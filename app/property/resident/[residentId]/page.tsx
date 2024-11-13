"use client";
import { Edit, EditOutlined, Inbox } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import WorkOrders from "./WorkOrders";
import Visitors from "./Visitors";
import QrPass from "./QrPass";
import Bookings from "./Bookings";

const page = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("work-orders");

  const tabs = ["work-orders", "visitors", "qr-pass", "bookings"];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/property/resident/fdsfd?tab=${tab}`);
  };

  useEffect(() => {
    const tab = new URLSearchParams(window.location.search).get("tab");
    if (tab && tabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, []);

  return (
    <div className="w-full h-full flex justify-start items-center flex-col  ">
      <div className="w-full h-max flex justify-between items-center border-b border-solid px-7 py-4">
        <div className="w-max h-max flex text-center justify-start items-start gap-3">
          <Avatar
            alt={"IKRAM"}
            src={"ff"}
            sx={{
              backgroundColor: "orange",
              width: "60px",
              height: "60px",
              fontWeight: 600,
              fontSize: "26px",
            }}
          />
          <div className="text-start w-full flex justify-center items-start gap-[1px] flex-col">
            <div className="text-black text-[18px] font-medium flex justify-between items-center gap-4">
              IKRAM KHAN{" "}
              <button>
                <EditOutlined />
              </button>
            </div>
            <div className="text-text2 font-normal text-[14px] ">
              ikram.codes@gmail.com
            </div>
            <div className="text-text2 font-normal text-[14px]">
              +123 456 7890
            </div>
          </div>
        </div>
        <div className="w-max flex justify-center items-center gap-3">
          <div className="bg-selected  text-text2 text-[15px] rounded-full h-[2rem] px-2 flex justify-center items-center">
            Unit # 109{" "}
          </div>
          <button className="w-max h-[2.6rem] bg-buttonSecondary flex justify-center items-center text-[17px] gap-2 rounded-md text-white p-4">
            <MessageOutlinedIcon />
            Start Chat
          </button>
        </div>
      </div>
      <div className="flex w-full h-full justify-between items-start ">
        <div className="w-[18%] h-full flex flex-col gap-0 p-4 py-6 border-r">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`p-2 px-0 text-left text-[15px] ${
                activeTab === tab ? "text-black font-medium" : "text-text2"
              } rounded-md`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex-1 p-4 h-[64vh]  scroll-bar overflow-y-auto">
          {activeTab === "work-orders" && <WorkOrders />}
          {activeTab === "visitors" && <Visitors />}
          {activeTab === "qr-pass" && <QrPass />}
          {activeTab === "bookings" && <Bookings />}
        </div>
      </div>
    </div>
  );
};

export default page;

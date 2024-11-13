"use client";
import { Avatar } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import React, { useState } from "react";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { GroupsOutlined } from "@mui/icons-material";
const page = () => {
  const [activeTab, setActiveTab] = useState<"people" | "group">("people");

  return (
    <div className="w-full h-full flex juistify-start items-center pt-[1rem] px-3 gap-8 flex-col">
      <div className="w-full flex justify-start items-start gap-4   border-b border-solid">
        <button
          className={`flex justify-center items-center gap-3 font-secondary w-[7rem] h-[2.8rem] font-medium  ${
            activeTab === "people"
              ? "text-active border-b border-b-active border-solid "
              : "text-text"
          }`}
          onClick={() => {
            setActiveTab("people");
          }}
        >
          <PersonAddAlt1OutlinedIcon sx={{ fontSize: "20px" }} /> PEOPLE
        </button>
        <button
          className={`flex justify-center items-center gap-3 font-secondary w-[7rem] h-[2.8rem] font-medium  ${
            activeTab === "group"
              ? "text-active border-b border-b-active border-solid "
              : "text-text"
          }`}
          onClick={() => {
            setActiveTab("group");
          }}
        >
          <GroupsOutlined sx={{ fontSize: "25px" }} /> GROUPS
        </button>
      </div>
      <div className="w-full h-[66vh] border-2 border-solid rounded-lg ">
        <div className="flex justify-between items-start w-full h-full ">
          <div className="h-full w-[25%] border-r-2 border-solid flex justify-start items-start flex-col gap-2 py-2">
            {[
              {
                avatar: "/profile.jpg",
                name: "IKRAM KHAN",
                email: "ikram.codes@gmail.com",
              },
              {
                avatar: "/profile2.jpeg",
                name: "Harry Poter",
                email: "harry3464@gmail.com",
              },
              {
                avatar: "/profile.jpg",
                name: "Robert Mark",
                email: "rb346@gmail.com",
              },
            ].map((chat, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-max flex justify-between items-center p-3 gap-3 border-b-2 border-solid"
                >
                  <Avatar
                    src={chat.avatar}
                    alt="IKRAM"
                    sx={{ width: "45px", height: "45px" }}
                  />
                  <div className="w-full flex justify-start items-start gap-1 flex-col">
                    <div className="text-text text-[14px] font-secondary">
                      {chat.name}
                    </div>
                    <div className="text-text2 text-[12px] font-secondary">
                      {chat.email}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-full w-[75%] flex justify-center items-center">
            <div className="w-max h-max flex justify-center items-center gap-6 flex-col">
              <div className="text-[25px] font-secondary font-bold text-black">
                Select a Chat or Start a New One
              </div>
              <button className="w-max text-white font-secondary h-[2.8rem] px-3 rounded-md bg-active ">
                Start A New Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

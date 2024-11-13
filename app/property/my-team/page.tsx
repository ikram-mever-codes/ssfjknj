"use client";
import TeamMemberCard from "components/Property/TeamMemberCard";
import React, { useState } from "react";
import AddForm from "./AddForm";

const page = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="p-3 py-6">
      <AddForm handleClose={handleClose} open={open} />
      <div className="w-full flex justify-between items-center ">
        <h5 className="text-xl font-secondary font-semibold ">My Team</h5>
        <div className="flex gap-3">
          <button className="w-max h-[2.8rem] px-3 border-2 border-solid border-active rounded-md text-active font-secondary ">
            Add Task
          </button>
          <button
            className="w-max h-[2.8rem] px-3 bg-active rounded-md text-white font-secondary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Add Team Member
          </button>
        </div>
      </div>
      <div className="w-full overflow-y-auto scroll-bar grid grid-cols-3 mt-[3rem] gap-3 gap-y-[1rem] h-[63vh] pr-2">
        {[
          {
            email: "ikram.codes@gmail.com",
            phone: "+1 233343454",
            name: "IKRAM KHAN",
            role: "Personal Assistant",
            avatar: "/profile.jpg",
          },

          {
            email: "bilal5607@gmail.com",
            phone: "+1 23344398",
            name: "Bilal Ahmad",
            role: "Lease Manager",
            avatar: "/profile2.jpeg",
          },
          {
            email: "ikram.codes@gmail.com",
            phone: "+1 233343454",
            name: "IKRAM KHAN",
            role: "Personal Assistant",
            avatar: "/profile2.jpeg",
          },
          {
            email: "ikramxpakistan@gmail.com",
            phone: "+1 233344587",
            name: "IKRAM KHAN",
            role: "Manager",
            avatar: "/profile.jpg",
          },
          {
            email: "alsion@gmail.com",
            phone: "+1 2445343454",
            name: "Alison Geroge",
            role: "Cleaner",
            avatar: "/profile.jpg",
          },
          {
            email: "ikram.codes@gmail.com",
            phone: "+1 233343454",
            name: "IKRAM KHAN",
            role: "Personal Assistant",
            avatar: "/profile2.jpeg",
          },
          {
            email: "ikram.codes@gmail.com",
            phone: "+1 233343454",
            name: "IKRAM KHAN",
            role: "Personal Assistant",
            avatar: "/profile2.jpeg",
          },
          {
            email: "ikram.codes@gmail.com",
            phone: "+1 233343454",
            name: "IKRAM KHAN",
            role: "Personal Assistant",
            avatar: "/profile2.jpeg",
          },
          {
            email: "ikram.codes@gmail.com",
            phone: "+1 233343454",
            name: "IKRAM KHAN",
            role: "Personal Assistant",
            avatar: "/profile2.jpeg",
          },
        ].map((tm) => {
          return (
            <TeamMemberCard
              name={tm.name}
              phone={tm.phone}
              email={tm.email}
              role={tm.role}
              avatar={tm.avatar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;

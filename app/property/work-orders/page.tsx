"use client";
import React from "react";
import MWorkOrderCard from "components/Property/MWorkOrderCard";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

const page = () => {
  const [filter, setFilter] = React.useState("Upcoming");

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };
  return (
    <div className="p-3 flex justify-start items-center flex-col w-full gap-[1rem] ">
      <div className="flex items-center justify-between w-full">
        <h5 className="font-bold text-[22px] text-black font-secondary">
          Work Orders
        </h5>
        <Select
          value={filter}
          onChange={handleFilterChange}
          variant="outlined"
          displayEmpty
          className="bg-white shadow-sm rounded-xl overflow-hidden"
          sx={{ height: "2.8rem" }}
        >
          <MenuItem value="All" selected>
            All
          </MenuItem>
          <MenuItem value="Upcoming">Upcoming</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </div>{" "}
      <div className="w-full grid grid-cols-3 gap-4 px-0  h-[70vh] overflow-y-auto scroll-bar ">
        {[0, 1, 2, 3, 4, 5].map((wq) => {
          return (
            <MWorkOrderCard
              ID={"13244"}
              createdAt={`${Date.now()}`}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laudantium vel culpa dolorem repellendus rerum temporibus neque, modi quo consequuntur."
              }
              image={
                "https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              title={"Fan and Lights Repairing"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;

"use client";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import PackageCard from "components/Property/PackageCard";
import React, { useState } from "react";

const Packages: React.FC = () => {
  const [filter, setFilter] = useState("pending");

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };
  return (
    <div className="p-3 flex justify-start items-center flex-col w-full gap-[1rem] ">
      <div className="flex items-center justify-between w-full">
        <h5 className="font-bold text-[22px] text-black font-secondary">
          Packages
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
          <MenuItem value="pending">Pending Pickup</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
      </div>{" "}
      <div className="w-full grid grid-cols-3 gap-4 px-0  h-[70vh] overflow-y-auto scroll-bar ">
        {[0, 1, 2, 3, 4, 5].map((wq) => {
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
  );
};

export default Packages;

"use client";
import Dashboard from "components/MainDashboard/Dashboard";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/Redux/store";
import { useRouter } from "next/navigation";
import Sidebar from "components/MainDashboard/Sidebar";
const page = () => {
  return (
    <div
      className="w-full h-max min-h-[60vh] flex justify-between items-start py-[2rem]"
      style={{ display: "grid", gridTemplateColumns: "73% 27%", gap: "2rem" }}
    >
      <Dashboard />
      <Sidebar />
    </div>
  );
};

export default page;

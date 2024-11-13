import React from "react";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Face5Icon from "@mui/icons-material/Face5";

// Dummy data for the chart
const data = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 1500 },
  { month: "Mar", revenue: 1300 },
  { month: "Apr", revenue: 1800 },
  { month: "May", revenue: 1600 },
  { month: "Jun", revenue: 2000 },
  { month: "Jul", revenue: 2200 },
  { month: "Aug", revenue: 2100 },
  { month: "Sep", revenue: 2300 },
  { month: "Oct", revenue: 2400 },
  { month: "Nov", revenue: 2500 },
  { month: "Dec", revenue: 2800 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[1rem]">
      <h1 className="text-2xl text-text font-secondary font-semibold w-full text-left">
        Overview
      </h1>
      <div className="w-full flex justify-between items-center gap-5">
        <div className="h-[140px] w-[15rem] rounded-2xl shadow-md bg-white px-5 py-5 flex justify-between items-start flex-col">
          <div className="w-full h-max flex justify-start gap-4 items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-pink-300/50 text-pink-600 flex justify-center items-center">
              <ApartmentOutlinedIcon />
            </div>
            <div className="text-text font-secondary font-medium text-[18px]">
              Properties
            </div>
          </div>
          <div className="w-full text-left font-secondary text-[30px] font-bold text-text">
            42
          </div>
        </div>
        <div className="h-[140px] w-[15rem] rounded-2xl shadow-md bg-white px-5 py-5 flex justify-between items-start flex-col">
          <div className="w-full h-max flex justify-start gap-4 items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-purple-300/50 text-purple-600 flex justify-center items-center">
              <GroupOutlinedIcon />
            </div>
            <div className="text-text font-secondary font-medium text-[18px]">
              Residents
            </div>
          </div>
          <div className="w-full text-left font-secondary text-[30px] font-bold text-text">
            500
          </div>
        </div>
        <div className="h-[140px] w-[15rem] rounded-2xl shadow-md bg-white px-5 py-5 flex justify-between items-start flex-col">
          <div className="w-full h-max flex justify-start gap-4 items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-orange-300/50 text-orange-600 flex justify-center items-center">
              <Face5Icon />
            </div>
            <div className="text-text font-secondary font-medium text-[18px]">
              Staff
            </div>
          </div>
          <div className="w-full text-left font-secondary text-[30px] font-bold text-text">
            12
          </div>
        </div>

        <div className="h-[140px] w-[15rem] rounded-2xl shadow-md bg-white px-5 py-5 flex justify-between items-start flex-col">
          <div className="w-full h-max flex justify-start gap-4 items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-blue-300/50 text-blue-600 flex justify-center items-center">
              <PrecisionManufacturingOutlinedIcon />
            </div>
            <div className="text-text font-secondary font-medium text-[18px]">
              Assets
            </div>
          </div>
          <div className="w-full text-left font-secondary text-[30px] font-bold text-text">
            18
          </div>
        </div>
      </div>
      <div className="w-full h-max mt-10 min-h-[550px] bg-white px-[1rem] py-[20px]  gap-[1rem] flex justify-start items-start flex-col shadow-md rounded-2xl">
        <h1 className="text-2xl text-text font-secondary font-semibold  px-[1.4rem] mb-[1rem]">
          {" "}
          Monthly Revenue
        </h1>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563EB"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Area
              type="monotone"
              dataKey="revenue (USD)"
              stroke="#C9E2FE"
              fill="#C9E2FE"
              fillOpacity={0.5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;

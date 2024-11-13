"use client";
import {
  Add,
  DashboardOutlined,
  HouseOutlined,
  PeopleOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Tabs, Tab, Modal } from "@mui/material";
import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PropertyForm from "../../components/Property/PropertyForm";
import Link from "next/link";

const page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const tabData = [
    { label: "All Properties", count: 10 },
    { label: "New Listed", count: 5 },
    { label: "Draft", count: 2 },
    { label: "Pending", count: 3 },
  ];
  const properties = [
    {
      name: "Greenview Apartments",
      Address: "Punjab Taxila HIT Qtr 30 | PK",
      residents: 130,
      units: 60,
      image:
        "https://plus.unsplash.com/premium_photo-1661963100207-d92645c85417?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Greenview Apartments",
      Address: "Punjab Taxila HIT Qtr 30 | PK",
      residents: 130,
      units: 60,
      image:
        "https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Greenview Apartments",
      Address: "Punjab Taxila HIT Qtr 30 | PK",
      residents: 130,
      units: 60,
      image:
        "https://plus.unsplash.com/premium_photo-1661918376346-bb775e744fcb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Greenview Apartments",
      Address: "Punjab Taxila HIT Qtr 30 | PK",
      residents: 130,
      units: 60,
      image:
        "https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Greenview Apartments",
      Address: "Punjab Taxila HIT Qtr 30 | PK",
      residents: 130,
      units: 60,
      image:
        "https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="w-full h-[84vh] p-general flex justify-start items-center flex-col  gap-[2rem] bg-white rounded-xl shadow-xl">
      <PropertyForm handleClose={handleClose} open={open} />
      <div className="w-full h-max flex justify-start items-center flex-col ">
        <div className="w-full flex justify-between items-center px-[15px]">
          <div className="text-secondary text-[22px] font-semibold text-text">
            Manage Properties
          </div>
          <button
            onClick={() => setOpen(true)}
            className="w-max h-[2.3rem] text-[15px] text-white gap-[5px] button-hover font-primary bg-primary p-[10px] flex justify-center items-center rounded-md"
          >
            <Add sx={{ fontSize: "20px" }} />
            Add Property
          </button>
        </div>

        <div className="w-full flex justify-start items-center border-b  border-solid ">
          <Tabs
            value={activeTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="Property Tabs"
            centered
          >
            {tabData.map((tab, index) => (
              <Tab
                key={index}
                label={`${tab.label} (${tab.count})`}
                className="font-secondary"
                sx={{
                  textTransform: "none",
                  fontSize: "15px",
                  fontWeight: activeTab === index ? 500 : 400,
                  borderBottom: activeTab === index ? "2px solid" : "none",
                  borderColor: "primary.main",
                }}
              />
            ))}
          </Tabs>
        </div>
      </div>
      <div
        className="w-full gap-[1rem] overflow-y-auto scroll-bar pr-2"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
        }}
      >
        {properties.map((property, index) => {
          return (
            <Link
              href="/property"
              key={index}
              className="w-full p-3 cursor-pointer rounded-lg border-solid border-2  flex justify-start items-center gap-1 flex-col "
            >
              <Image
                src={property.image}
                alt="Greenview Apartments"
                width={500}
                loading="lazy"
                height={500}
                className="h-max w-full rounded-lg object-cover object-center"
              />
              <h1 className="w-full text-left  font-bold text-[22px] font-secondary">
                {property.name}
              </h1>
              {/* <div className="w-full text-left text-[13px] text-text2"> </div> */}
              <div className="text-left w-full font-medium text-[16px] ">
                {property.Address}
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex justify-center text-text2 items-center gap-[5px] text-[14px]">
                  <PeopleOutlined sx={{ fontSize: "20px" }} />
                  {property.residents} Residents
                </div>
                <div className="flex justify-center text-text2 items-center gap-[5px] text-[14px]">
                  <HouseOutlined sx={{ fontSize: "20px" }} />
                  {properties.units} Units
                </div>
              </div>
              <div className="w-full h-max flex justify-between items-center gap-[1rem] mt-2">
                <button className="w-full h-[2.5rem] bg-primary text-white flex justify-center rounded-md gap-2 font-secondary items-center">
                  <DashboardOutlined sx={{ fontSize: "18px" }} /> Dashboard
                </button>
                <button className="w-full h-[2.5rem] border-primary border-solid border text-black flex justify-center rounded-md gap-2 font-secondary items-center">
                  <OpenInNewIcon />
                  View Live
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;

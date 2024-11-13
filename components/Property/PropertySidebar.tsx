"use client";
import {
  ArrowBackIos,
  HardwareOutlined,
  HouseOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-b border-gray-300">
      <div
        className={`flex justify-between items-center p-4 py-2 cursor-pointer transition-colors duration-300 ${
          isOpen ? "bg-gray-100" : "bg-white"
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex justify-start items-center gap-2">
          <span
            className={`transform transition-transform duration-300 text-[12px] ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
          <h3 className="font-semibold text-[17px] font-secondary text-text">
            {title}
          </h3>
        </div>
        <button className="font-medium font-secondary">Edit</button>
      </div>
      {isOpen && (
        <div className="p-4">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

const PropertySidebar = () => {
  return (
    <aside className="w-[28%] flex justify-start items-center overflow-auto scroll-bar flex-col gap-3 p-3 h-full shadow-md rounded-lg py-4 bg-white">
      <button className="w-full flex justify-start px-2 font-secondary text-[16px] gap-1 font-semibold items-center h-max">
        <ArrowBackIos sx={{ fontSize: "12px" }} />
        Properties
      </button>
      <div className="w-full flex justify-center items-start h-max flex-col">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={500}
          height={500}
          className="w-full h-max object-center rounded-md"
          alt="Green View Apartments"
        />
        <h1 className="w-full text-left font-bold text-[18px] font-secondary mt-2">
          Greenview Apartments
        </h1>
        <h2 className="w-full text-left text-text2 text-[15px] font-secondary">
          greenviewapartments.accez.app
        </h2>
        <div className="text-gray2 text-[13px] font-secondary mt-2 font-medium w-max px-2 py-1 rounded-sm text-[#34619A] bg-[#EAF4FF]">
          New Property
        </div>
      </div>

      <AccordionItem title="Details">
        <div className="flex justify-start text-[#687385] items-center flex-col gap-2 font-secondary">
          <div className="w-full h-max flex justify-start items-start flex-col gap-1">
            <label
              htmlFor="property-owner"
              className="font-medium text-[16px] font-secondary "
            >
              Property Owner
            </label>
            <div id="property-owner" className="text-black text-[14px]">
              M. Imran
            </div>
          </div>
          <div className="w-full h-max flex justify-start items-start flex-col gap-1">
            <label
              htmlFor="property-owner"
              className="font-medium text-[16px] font-secondary "
            >
              Description
            </label>
            <div id="property-owner" className="text-black text-[14px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus, cum...
            </div>
          </div>
          <div className="w-full h-max flex justify-start items-start flex-col gap-1">
            <label
              htmlFor="property-owner"
              className="font-medium text-[16px] font-secondary "
            >
              Email
            </label>
            <div id="property-owner" className="text-black text-[14px]">
              imran7@gmail.com
            </div>
          </div>{" "}
          <div className="w-full h-max flex justify-start items-start flex-col gap-1">
            <label
              htmlFor="property-owner"
              className="font-medium text-[16px] font-secondary "
            >
              State
            </label>
            <div id="property-owner" className="text-black text-[14px]">
              Oklahoma
            </div>
          </div>
          <div className="w-full h-max flex justify-start items-start flex-col gap-1">
            <label
              htmlFor="property-owner"
              className="font-medium text-[16px] font-secondary "
            >
              City
            </label>
            <div id="property-owner" className="text-black text-[14px]">
              Kensas
            </div>
          </div>
          <div className="w-full h-max flex justify-start items-start flex-col gap-1">
            <label
              htmlFor="property-owner"
              className="font-medium text-[16px] font-secondary "
            >
              Phone Number
            </label>
            <div id="property-owner" className="text-black text-[14px]">
              (706) 952-1661
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="Property Details">
        <div className="w-full h-max flex justify-start items-center flex-col gap-[4px]">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 text-[16px] font-secondary">
              <PeopleAltOutlined sx={{ fontSize: "18px" }} />
              Residents
            </div>
            <div className="font-semibold text-[16px]">120</div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 text-[16px] font-secondary">
              <HouseOutlined sx={{ fontSize: "18px" }} />
              Units
            </div>
            <div className="font-semibold text-[16px]">54</div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 text-[16px] font-secondary">
              <PeopleAltOutlined sx={{ fontSize: "18px" }} />
              Staff
            </div>
            <div className="font-semibold text-[16px]">20</div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 text-[16px] font-secondary">
              <HardwareOutlined sx={{ fontSize: "18px" }} />
              Assets
            </div>
            <div className="font-semibold text-[16px]">20</div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 text-[16px] font-secondary">
              <HouseOutlined sx={{ fontSize: "18px" }} />
              Ammenities
            </div>
            <div className="font-semibold text-[16px]">20</div>
          </div>
        </div>
      </AccordionItem>
    </aside>
  );
};

export default PropertySidebar;

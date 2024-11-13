"use client";
import PropertyHeader from "components/Property/PropertyHeader";
import PropertySidebar from "components/Property/PropertySidebar";
import React, { ReactNode, useState } from "react";

const PropertyLayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[100%] h-screen flex justify-between items-center gap-6 overflow-hidden py-8">
      <PropertySidebar />
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-3 pr-0 py-2 w-[70vw]  h-full">
        <PropertyHeader />
        <div className="w-full h-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default PropertyLayoutProvider;

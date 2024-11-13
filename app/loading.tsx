"use client";
import React from "react";
import { Bars } from "react-loader-spinner";
const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <Bars
          height="80"
          width="80"
          color="#122432"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loading;

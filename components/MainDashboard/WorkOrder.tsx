import { MoreVertOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

const WorkOrder = () => {
  return (
    <div className="w-full bg-white p-4 rounded-xl shadow-md flex-col  h-max flex justify-start items-center gap-4">
      <div className="w-full flex justify-between items-center">
        <h5 className=" text-left text-xl font-secondary font-semibold">
          Work Orders
        </h5>
        <button>
          <MoreVertOutlined />
        </button>
      </div>
      <div className="w-full flex justify-start items-center gap-1 flex-col">
        {[0, 1, 2, 3].map((wqo, index) => {
          return (
            <div
              className={`w-full h-max flex justify-start  ${
                index !== 2 && "border-b-2 border-solid"
              } py-1 items-start gap-1 flex-col`}
              key={index}
            >
              <div className="w-full flex justify-between items-center">
                <div className="w-full text-left  text-lg font-secondary text-text">
                  Fan and Light Repairing
                </div>
                <div className="text-[14px] text-text2 rounded-full w-[7rem] text-center h-max px-2 py-2 mb-1 bg-selected">
                  Unit# 106
                </div>{" "}
              </div>
              {/* <div className="flex justify-start items-center gap-2 font-secondary text-text">
                <Avatar src="/profile2.jpeg" /> Peter Dork
              </div> */}
              <div className="text-text2 text-sm font-secondary">
                12 Nov, 5:21 PM
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkOrder;

"use client";
import React, { useState } from "react";
import { SendOutlined, ExpandMore, ExpandLess } from "@mui/icons-material";
import { Avatar, IconButton, Select, MenuItem } from "@mui/material";
import { blue } from "@mui/material/colors";

const WorkOrderPage = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [status, setStatus] = useState("ongoing");
  const [assignee, setAssignee] = useState("John Doe");

  return (
    <div className="w-full min-h-[25vmax] h-max flex justify-start items-center p-5 pr-8">
      <div className="w-full min-h-[25vmax] h-max border-2 border-solid rounded-xl p-2 flex flex-col">
        <div className="flex flex-row justify-between w-full mt-4">
          <div className="flex flex-col  p-4 w-[65%] gap-[1.4rem]">
            <div className="flex justify-between items-start w-full">
              <div className="text-[14px] text-text2 rounded-full w-max h-max px-2 py-1 bg-selected">
                Unit# 109
              </div>
              <div className="text-text2">
                ID: <strong className="text-black font-medium">332243</strong>
              </div>
            </div>

            <h5 className="font-semibold font-secondary text-[black] text-[25px]">
              Fan and Lights Repairing
            </h5>

            <div className="flex flex-col gap-3">
              <strong className="font-medium text-[14px]">Description</strong>
              <p className="text-[14px] text-text2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                aut voluptatum esse eum hic officia quas iusto distinctio
                optio...
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <strong className="font-medium text-[14px]">Activity</strong>
              <div className="flex items-center gap-3">
                <Avatar src="/profile.jpg" sx={{ width: 45, height: 45 }} />
                <form className="w-full h-[3rem] flex items-center gap-3 border-2 border-solid rounded-lg px-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full h-full bg-transparent border-none outline-none focus:outline-none px-3"
                  />
                  <button className="bg-active rounded-xl w-[50px] h-[35px] hover:bg-activeHover transition-all ease-in-out text-white">
                    <SendOutlined />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-[35%] p-4 py-0 ">
            <div className="w-full h-max border-2 border-solid rounded-md">
              <div className="w-full flex justify-between items-center p-3">
                <h3 className="font-semibold text-lg">Details</h3>
                <IconButton onClick={() => setShowDetails(!showDetails)}>
                  {showDetails ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </div>

              {showDetails && (
                <div className="p-4 space-y-4">
                  <div className="w-full flex flex-col space-y-2">
                    <label className="font-medium">Status</label>
                    <Select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full"
                    >
                      <MenuItem value="completed">
                        <button className="bg-green-400/40 text-[14px] font-secondary text-green-700 w-max h-[2.5rem] rounded-full px-3">
                          Completed
                        </button>
                      </MenuItem>
                      <MenuItem value="ongoing" selected>
                        <button className="bg-blue-400/40 text-[14px] font-secondary text-blue-700 w-max h-[2.5rem] rounded-full px-3">
                          Ongoing
                        </button>
                      </MenuItem>
                      <MenuItem value="pending">
                        <button className="bg-yellow-400/40 text-[14px] font-secondary text-yellow-700 w-max h-[2.5rem] rounded-full px-3">
                          Pending
                        </button>
                      </MenuItem>
                      <MenuItem value="rejected">
                        <button className="bg-red-400/40 text-[14px] font-secondary text-red-700 w-max h-[2.5rem] rounded-full px-3">
                          Rejected
                        </button>
                      </MenuItem>
                    </Select>
                  </div>

                  <div className="w-full flex flex-col space-y-2">
                    <label className="font-medium">Assignee</label>
                    <Select
                      value={assignee}
                      onChange={(e) => setAssignee(e.target.value)}
                      className="w-full"
                    >
                      <MenuItem value="">
                        <em>Select Assignee</em>
                      </MenuItem>
                      <MenuItem value="John Doe" selected>
                        <div className="flex items-center gap-2">
                          <Avatar src="/avatar1.jpg" />
                          <span>John Doe</span>
                        </div>
                      </MenuItem>
                      <MenuItem value="Jane Smith">
                        <div className="flex items-center gap-2">
                          <Avatar src="/avatar2.jpg" />
                          <span>Jane Smith</span>
                        </div>
                      </MenuItem>
                      <MenuItem value="Mike Lee">
                        <div className="flex items-center gap-2">
                          <Avatar src="/avatar3.jpg" />
                          <span>Mike Lee</span>
                        </div>
                      </MenuItem>
                    </Select>
                  </div>

                  <div className="w-full flex flex-col space-y-2 px-2">
                    <label className="font-medium">Reporter</label>
                    <div className="flex items-center  font-secondary gap-2">
                      <Avatar sx={{ bgcolor: blue[600] }}>R</Avatar>

                      <span>Rob Mark</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-black text-[14px] w-full text-left py-2">
              Created November 5, 2024 at 9:40 AM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderPage;

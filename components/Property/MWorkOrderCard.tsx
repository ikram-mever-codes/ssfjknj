import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { Avatar, Menu, MenuItem } from "@mui/material";
import Link from "next/link";

interface MWorkOrderCardProps {
  ID: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

const MWorkOrderCard: React.FC<MWorkOrderCardProps> = ({
  ID,
  title,
  description,
  image,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMarkComplete = () => {
    console.log("Mark as Complete");
    handleMenuClose();
  };

  const handleAssignToStaff = () => {
    console.log("Assign to Staff");
    handleMenuClose();
  };

  return (
    <div className="w-full cursor-pointer flex justify-between items-center flex-col  py-2 gap-4 px-0 rounded-xl h-max border-2 border-solid">
      <Link href={`/property/work-orders/${"ff3rf"}`}>
        <div className="w-full flex justify-between items-center border-b border-solid pb-1 px-3">
          <div className="text-[14px] text-text2 rounded-full w-max h-max px-2 py-2 mb-1 bg-selected">
            Unit# 106
          </div>
          <div className="text-[14px] text-text2">
            ID: <span className="text-black">{ID}</span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full px-3 my-2">
          <div className="text-[15px]">16 Oct 2024</div>
          <div className="text-[13px] text-text2">2:00pm-5:00pm</div>
        </div>
        <div className="flex justify-between items-center gap-2 flex-col px-3">
          {/* <Image
            src={image}
            alt={title}
            className="w-full h-max max-h-[12rem] rounded-lg object-cover object-center"
            width={500}
            height={500}
          /> */}

          <h2 className="w-full text-left text-[18px] font-semibold">
            {title}
          </h2>
          <div className="text-[14px] text-text2 font-light">
            {description.substring(0, 100)}...
          </div>
        </div>
        <div className="flex justify-between items-center w-full px-3 mt-2">
          <div className="flex justify-start items-center gap-2">
            <Avatar src="/profile.jpg" />{" "}
            <p className="text-[16px]">IKRAM KHAN</p>
          </div>
          <div className="text-[13px] text-text2">
            {" "}
            <button onClick={handleMenuOpen}>
              <MoreVertIcon />
            </button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={handleMarkComplete}
                className="mx-3 text-[15px]"
              >
                Mark as Complete
              </MenuItem>
              <MenuItem
                onClick={handleAssignToStaff}
                className="mx-3 text-[15px]"
              >
                Assign to Staff
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MWorkOrderCard;

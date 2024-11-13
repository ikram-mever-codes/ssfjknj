import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { Menu, MenuItem } from "@mui/material";

interface WorkOrderCardProps {
  ID: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

const WorkOrderCard: React.FC<WorkOrderCardProps> = ({
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
    <div className="w-full cursor-pointer flex justify-between items-center flex-col gap-2 p-3 px-0 rounded-xl h-max border-2 border-solid">
      <div className="w-full flex justify-between items-center border-b border-solid py-1 px-3">
        <div className="text-[14px] text-text2">
          ID: <span className="text-black">{ID}</span>
        </div>
        <button onClick={handleMenuOpen}>
          <MoreVertIcon />
        </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMarkComplete} className="mx-3 text-[15px]">
            Mark as Complete
          </MenuItem>
          <MenuItem onClick={handleAssignToStaff} className="mx-3 text-[15px]">
            Assign to Staff
          </MenuItem>
        </Menu>
      </div>
      <div className="flex justify-between items-center gap-2 flex-col px-3">
        {/* <Image
          src={image}
          alt={title}
          className="w-full h-max max-h-[12rem] rounded-lg object-cover object-center"
          width={500}
          height={500}
        /> */}
        <div className="self-start text-green-600 bg-green-400/40 rounded-full py-2 px-3 text-[13px]">
          New
        </div>
        <h2 className="w-full text-left text-[18px] font-semibold">{title}</h2>
        <div className="text-[15px] text-text2">
          {description.substring(0, 100)}...
        </div>
      </div>
      <div className="flex justify-between items-center w-full px-3">
        <div className="text-[16px]">16 Oct 2024</div>
        <div className="text-[13px] text-text2">2:00pm-5:00pm</div>
      </div>
    </div>
  );
};

export default WorkOrderCard;

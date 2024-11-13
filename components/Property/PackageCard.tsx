import { Avatar, Menu, MenuItem } from "@mui/material";
import { GridMoreVertIcon } from "@mui/x-data-grid";
import React, { useState } from "react";

interface PackageCardProps {
  packageId: string;
  unitNo: string;
  contact: string;
  createdAt: string;
  avatar: string;
  fullName: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  unitNo,
  fullName,
  contact,
  createdAt,
  avatar,
  packageId,
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
      <div className="w-full flex justify-between items-center border-b border-solid py-1 px-3 ">
        <div className="text-[14px] text-text2 rounded-full w-max h-max px-2 py-2 mb-1 bg-selected">
          Unit# {unitNo}{" "}
        </div>
        <button onClick={handleMenuOpen}>
          <GridMoreVertIcon />
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
      <div className="flex justify-between w-full items-center gap-3  my-2 flex-col px-3">
        <div className="w-full flex justify-start font-secondary items-center gap-2 text-text2 text-[16px]">
          Package ID:
          <strong className="text-black font-normal">{packageId}</strong>
        </div>
        <div className="w-full flex justify-start font-secondary items-center gap-2 text-text2 text-[16px]">
          Date:
          <strong className="text-black font-normal">{createdAt}</strong>
        </div>
        <div className="w-full flex justify-start font-secondary items-center gap-2 text-text2 text-[16px]">
          Contact:
          <strong className="text-black font-normal">{contact}</strong>
        </div>
      </div>
      <div className="flex justify-start gap-3 font-secondary text-[16px] items-center w-full px-3">
        <Avatar src="/profile2.jpeg" sx={{ width: "45px", height: "45px" }} />{" "}
        Rob Mark
      </div>
    </div>
  );
};

export default PackageCard;

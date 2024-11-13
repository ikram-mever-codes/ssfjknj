import { Avatar, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import Image from "next/image";
import qrImage from "../../assets/dummy-qr.png";

interface VisitorCardProps {
  name: string;
  contact: string;
  validity: string;
  access: string;
  email: string;
  serviceId: string;
}
const VisitorCard: React.FC<VisitorCardProps> = ({
  name,
  email,
  access,
  contact,
  serviceId,
  validity,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full cursor-pointer flex justify-between items-center flex-col gap-2 py-2 px-0 rounded-xl h-max border-2 border-solid">
      <div className="w-full flex justify-between items-center border-b border-solid px-3">
        <div className="w-max h-max flex text-center justify-start items-center py-2 gap-2">
          <Avatar
            alt={name}
            sx={{
              backgroundColor: "purple",
              width: "40px",
              height: "40px",
              fontWeight: 400,
              fontSize: "20px",
            }}
            src="fsdf"
          />
          <div className="text-start w-full flex justify-center items-start  flex-col">
            <div className="text-black font-normal text-[16px]">{name}</div>
            <div className="text-text2 font-normal text-[12px]">{email}</div>
          </div>
        </div>
        <button onClick={handleMenuOpen}>
          <MoreVertIcon />
        </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem className="mx-3 text-[15px]">Mark as Complete</MenuItem>
          <MenuItem className="mx-3 text-[15px]">Assign to Staff</MenuItem>
        </Menu>{" "}
      </div>
      <div className="flex justify-between items-center">
        <div className="w-[35%] flex justify-center items-center p-4 bg-active m-4 rounded-md">
          <Image src={qrImage} alt={"Qr Code"} className="" />
        </div>
        <div className="  w-[60%] flex justify-between items-start  flex-col">
          <div className="text-[16px] text-black ">
            <span className="text-[15px] text-text2">Service ID:</span>{" "}
            {serviceId}
          </div>
          <div className="text-[16px] text-black ">
            <span className="text-[15px] text-text2">Validity:</span> {validity}
          </div>
          <div className="text-[16px] text-black ">
            <span className="text-[15px] text-text2">Contact:</span> {contact}
          </div>
          <div className="text-[16px] text-black ">
            <span className="text-[15px] text-text2">Access:</span> {access}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorCard;

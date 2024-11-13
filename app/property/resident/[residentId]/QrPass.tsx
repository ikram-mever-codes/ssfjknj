import { Avatar, Menu, MenuItem } from "@mui/material";
import { GridMoreVertIcon } from "@mui/x-data-grid";
import Image from "next/image";
import qrImage from "../../../../assets/dummy-qr.png";
import React, { useState } from "react";

const QrPass: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full h-full flex justify-center items-center py-6 px-4">
      <div className="w-max max-w-[500px] flex justify-center items-center  p-4 px-0 border-2 relative border-solid rounded-xl">
        {/* Menu */}
        <div className=" flex justify-between items-center  m-4 absolute top-0 right-0">
          <button onClick={handleMenuOpen}>
            <GridMoreVertIcon />
          </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem className="mx-3 text-[15px]">Mark as Complete</MenuItem>
            <MenuItem className="mx-3 text-[15px]">Assign to Staff</MenuItem>
          </Menu>
        </div>

        <div className="flex justify-center gap-6 w-max items-center">
          <div className="flex justify-center items-center w-[40%] p-4 bg-active rounded-md">
            <Image
              src={qrImage}
              alt={"Qr Code"}
              className="object-contain max-w-full max-h-[150px]"
            />
          </div>
          <div className="w-max flex flex-col gap-2">
            <div className="text-[16px] text-black">
              <span className="text-[15px] text-gray-500">Pass Code:</span>{" "}
              {"356674"}
            </div>
            <div className="text-[16px] text-black">
              <span className="text-[15px] text-gray-500">Service ID:</span>{" "}
              {"32425"}
            </div>
            <div className="text-[16px] text-black">
              <span className="text-[15px] text-gray-500">Validity:</span>{" "}
              {"16 Oct - 20 Oct"}
            </div>
            <div className="text-[16px] text-black">
              <span className="text-[15px] text-gray-500">Contact:</span>{" "}
              {"+91 121 3245"}
            </div>
            <div className="text-[16px] text-black">
              <span className="text-[15px] text-gray-500">Access:</span> {"All"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrPass;

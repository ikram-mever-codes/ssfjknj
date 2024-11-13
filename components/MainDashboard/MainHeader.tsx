import {
  Language,
  NotificationsOutlined,
  Search,
  Support,
} from "@mui/icons-material";
import React from "react";
import { MdHelp } from "react-icons/md";

const MainHeader = () => {
  return (
    <header className="flex justify-between items-center w-full h-max py-6">
      <div className="">
        <form className="w-[35vw] bg-white overflow-hidden rounded-lg shadow-md flex justify-start items-center h-[50px] px-5  gap-3 py-3">
          <button type="submit">
            <Search className="text-text2" sx={{ fontSize: "30px" }} />
          </button>

          <input
            type="search"
            placeholder="Search"
            className="w-full h-full bg-transparent"
          />
        </form>{" "}
        {/* <h1 className="text-text text-[40px] font-bold font-secondary">
          Welcome Property Manager
        </h1>
        <p className="font-secondary">
          Control and Analyse your properties in most convenient way
        </p> */}
      </div>
      <div className="w-max h-full flex justify-center  items-center gap-5">
        <button className="w-[8rem] h-[2.8rem] rounded-md text-primary font-semibold border-2 border-solid border-primary">
          <Language /> English US
        </button>
        <button className="w-[8rem] flex justify-center items-center gap-2 h-[2.8rem] rounded-md text-white font-semibold bg-primary">
          <MdHelp className="text-[24px]" /> Support
        </button>
        <button className="w-[2.8rem] h-[2.8rem] rounded-lg  bg-primary text-white">
          <NotificationsOutlined sx={{ fontSize: "30px" }} />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;

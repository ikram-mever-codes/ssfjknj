import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";

interface TeamMemberCardProps {
  name: string;
  avatar: string;
  role: string;
  email: string;
  phone: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  avatar,
  role,
  phone,
  email,
}) => {
  return (
    <div className="p-3 w-[19rem]  min-h-[200px] h-max border-2 border-solid  rounded-2xl flex justify-start items-start flex-col gap-2">
      <div className="w-full flex justify-start h-max items-center  gap-3">
        <Avatar
          src={avatar}
          alt={name}
          sx={{ width: "40px", height: "40px" }}
        />
        <div className="font-secondary text-text">{name}</div>
      </div>
      <div className="text-[16px] mt-2   w-full flex justify-between font-secondary items-center gap-2 ">
        Role:{" "}
        <strong className="font-normal text-text font-secondary text-[17px]">
          {role}
        </strong>
      </div>

      <div className="text-[16px] w-full flex justify-between font-secondary items-center gap-2 ">
        email:{" "}
        <strong className="font-normal text-text font-secondary text-[17px]">
          {email}
        </strong>
      </div>
      <div className="text-[16px] w-full flex justify-between font-secondary items-center gap-2 ">
        Phone:{" "}
        <strong className="font-normal text-text font-secondary text-[17px]">
          {phone}
        </strong>
      </div>
      <Link
        href={"#"}
        className="self-start font-secondary border-b border-solid border-active text-active  "
      >
        Add Task
      </Link>
    </div>
  );
};

export default TeamMemberCard;

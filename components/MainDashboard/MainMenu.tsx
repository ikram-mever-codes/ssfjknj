import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineDashboard, MdPeopleOutline } from "react-icons/md";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import { logout } from "api/pm";
import { useDispatch } from "react-redux";
import { Menu, MenuItem, IconButton, Tooltip } from "@mui/material";
import { FaBuilding } from "react-icons/fa";
import {
  ApartmentOutlined,
  Dashboard,
  DashboardOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";

const MainMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout(dispatch);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="w-[5rem] h-full px-[5px] py-[20px] text-white bg-primary flex flex-col justify-between items-center">
      <div className="w-full h-max flex justify-center items-center my-4">
        <Image
          src="/logo-new.png"
          alt="Accez Logo"
          width={35}
          height={35}
          className="object-center object-cover"
        />
      </div>

      <ul className="flex flex-col gap-10 w-full items-center h-full justify-center">
        {[
          { href: "/", icon: <DashboardOutlined />, label: "Dashboard" },
          {
            href: "/properties",
            icon: <ApartmentOutlined />,
            label: "Properties",
          },
          { href: "/team", icon: <PeopleAltOutlined />, label: "Users" },
          {
            href: "/inbox",
            icon: <InsertCommentOutlinedIcon />,
            label: "Messages",
          },
          {
            href: "/settings",
            icon: <SettingsOutlinedIcon />,
            label: "Settings",
          },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`text-text2 hover:text-white transition duration-200 transform hover:scale-105 ${
                pathname === item.href ? "text-white" : "text-text2"
              }`}
            >
              <Tooltip title={item.label} placement="right">
                <div className="flex justify-center items-center text-3xl">
                  {item.icon}
                </div>
              </Tooltip>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <IconButton onClick={handleMenuOpen} className="p-1">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default MainMenu;

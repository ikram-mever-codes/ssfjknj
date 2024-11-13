"use client";
import React, { useEffect, useState } from "react";
import {
  MdLockOutline,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdLogin,
} from "react-icons/md";
import Image from "next/image";
import google from "../../assets/google.png";
import { useDispatch } from "react-redux";

import { toast } from "react-hot-toast";
import { errorStyles } from "lib/constant";
import { useRouter } from "next/navigation";
import { Checkbox, FormControlLabel, Typography, Link } from "@mui/material";
import { signUp } from "api/pm";

const SignupPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return toast.error("Please fill in all fields", errorStyles);
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match", errorStyles);
    }
    try {
      await signUp({ firstName, lastName, email, password }, dispatch);
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error("Signup failed, please try again", errorStyles);
    }
  };

  return (
    <div className="w-full min-h-[100vh] h-max p-[2rem] flex justify-center items-center">
      <div className="w-[30vw] min-h-[75vh] h-max bg-white shadow-xl rounded-xl p-[20px] flex justify-between items-center flex-col gap-[1rem]">
        <div className="w-full flex justify-start items-center gap-[5px] flex-col">
          <h1 className="w-full text-left text-[25px] font-secondary font-extrabold">
            Create Your Account! 🎉
          </h1>
          <h2 className="w-full text-left text-[15px] text-text2 font-medium">
            Join the Accez Community
          </h2>
        </div>

        <form
          className="w-full flex justify-start items-center gap-[1rem] flex-col"
          onSubmit={handleSignup}
        >
          <div className="w-full flex justify-start gap-[5px] items-start flex-col">
            <label
              htmlFor="firstName"
              className="text-[16px] font-medium font-secondary"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              className="w-full h-[2.5rem] rounded-lg border-solid border-gentleBorder border-[2px] p-[10px] font-secondary font-semibold"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="w-full flex justify-start gap-[5px] items-start flex-col">
            <label
              htmlFor="lastName"
              className="text-[16px] font-medium font-secondary"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              className="w-full h-[2.5rem] rounded-lg border-solid border-gentleBorder border-[2px] p-[10px] font-secondary font-semibold"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="w-full flex justify-start gap-[5px] items-start flex-col">
            <label
              htmlFor="email"
              className="text-[16px] font-medium font-secondary"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="eg. john@gmail.com"
              className="w-full h-[2.5rem] rounded-lg border-solid border-gentleBorder border-[2px] p-[10px] font-secondary font-semibold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex justify-start gap-[5px] items-start flex-col">
            <label
              htmlFor="password"
              className="text-[16px] font-medium font-secondary"
            >
              Password
            </label>
            <div className="w-full rounded-lg flex justify-start items-center p-[10px] gap-[10px] border-solid border-gentleBorder border-[2px]">
              <MdLockOutline className="text-[25px]" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Your password"
                className="w-full h-full border-none outline-none bg-transparent font-secondary font-semibold"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <MdOutlineVisibilityOff
                  className="text-[25px] cursor-pointer"
                  onClick={handlePasswordVisibility}
                />
              ) : (
                <MdOutlineVisibility
                  className="text-[25px] cursor-pointer"
                  onClick={handlePasswordVisibility}
                />
              )}
            </div>
          </div>

          <div className="w-full flex justify-start gap-[5px] items-start flex-col">
            <label
              htmlFor="confirmPassword"
              className="text-[16px] font-medium font-secondary"
            >
              Confirm Password
            </label>
            <div className="w-full rounded-lg flex justify-start items-center p-[10px] gap-[10px] border-solid border-gentleBorder border-[2px]">
              <MdLockOutline className="text-[25px]" />
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full h-full border-none outline-none bg-transparent font-secondary font-semibold"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="w-full hover:bg-hoverPrimary flex justify-center items-center gap-[10px] h-[2.8rem] bg-primary text-white font-secondary font-semibold text-[20px] rounded-lg">
            <MdLogin className="text-[20px]" />
            Sign Up
          </button>
        </form>

        <div className="w-full text-left text-[14px] ">
          Already have an account?{" "}
          <Link href="login" className="mx-[5px] font-semibold">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

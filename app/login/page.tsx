"use client";
import React, { useEffect, useState } from "react";
import {
  MdLockOutline,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdLogin,
  MdOutlineMailOutline,
} from "react-icons/md";
import Image from "next/image";
import google from "../../assets/google.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "api/pm";
import { toast } from "react-hot-toast";
import { errorStyles } from "lib/constant";
import { RootState } from "../Redux/store";
import { useRouter } from "next/navigation";
import { Checkbox, FormControlLabel, Typography, Link } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Page: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const router = useRouter();
  const { propertyManager } = useSelector(
    (state: RootState) => state.propertyManagerReducer
  );
  const dispatch = useDispatch();

  const handleClick = () => setShow(!show);

  // Login schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      await login(values, dispatch);
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed", errorStyles);
    }
  };

  useEffect(() => {
    if (propertyManager !== null) {
      router.push("/");
    }
  }, [propertyManager, router]);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[30vw] min-h-[75vh] h-max bg-white shadow-xl rounded-xl p-[20px] flex justify-between items-center flex-col gap-[1rem]">
        <div className="w-full flex justify-start items-center gap-[5px] flex-col">
          <h1 className="w-full text-left text-[25px] font-secondary font-extrabold">
            Hi, Welcome Back! 👋
          </h1>
          <h2 className="w-full text-left text-[15px] text-text2 font-medium">
            Login to your Accez Account
          </h2>
        </div>
        <button className="w-full h-[3rem] flex justify-center items-center gap-[20px] shadow rounded-lg font-secondary font-semibold text-[18px]">
          <Image
            src={google}
            alt="Google"
            width={30}
            height={30}
            className="object-fit object-center"
          />
          Sign in with Google
        </button>
        <div className="w-full h-max flex justify-between items-center gap-[10px]">
          <div className="w-[8rem] bg-[#E6E8F0] h-[2px]"></div>
          <div className="text-text2 font-secondary font-medium text-[14px] w-max">
            Or Sign in With Email
          </div>
          <div className="w-[8rem] bg-[#E6E8F0] h-[2px]"></div>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="w-full flex justify-start items-center gap-[1rem] flex-col">
              <div className="w-full flex justify-start gap-[5px] items-start flex-col">
                <label
                  htmlFor="email"
                  className="text-[16px] font-medium font-secondary"
                >
                  Email address
                </label>
                <div className="w-full rounded-lg flex justify-start items-center p-[10px] gap-[10px] border-solid border-gentleBorder border-[2px]">
                  <MdOutlineMailOutline className="text-[25px]" />
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="eg. john@gmail.com"
                    className="w-full h-full border-none outline-none bg-transparent font-secondary font-semibold"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 font-secondary"
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
                  <Field
                    type={show ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Your password"
                    className="w-full h-full border-none outline-none bg-transparent font-secondary font-semibold"
                  />
                  {show ? (
                    <MdOutlineVisibilityOff
                      className="text-[25px] cursor-pointer"
                      onClick={handleClick}
                    />
                  ) : (
                    <MdOutlineVisibility
                      className="text-[25px] cursor-pointer"
                      onClick={handleClick}
                    />
                  )}
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 font-secondary"
                />
              </div>

              <div className="w-full flex justify-between items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      color="primary"
                    />
                  }
                  label={
                    <Typography
                      style={{ fontSize: "14px" }}
                      className="font-medium"
                    >
                      Remember me
                    </Typography>
                  }
                />

                <Link href="/forgot-password" underline="none">
                  <Typography
                    color="primary"
                    className="font-medium text-[14px]"
                  >
                    Forgot password?
                  </Typography>
                </Link>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full hover:bg-hoverPrimary flex justify-center items-center gap-[10px] h-[2.8rem] bg-primary text-white font-secondary font-semibold text-[20px] rounded-lg"
              >
                <MdLogin className="text-[20px]" />
                {isSubmitting ? "Logging in..." : "Log In"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="w-full text-left text-[14px] ">
          Not Registered Yet?{" "}
          <Link href="sign-up" className="mx-[5px] font-semibold">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;

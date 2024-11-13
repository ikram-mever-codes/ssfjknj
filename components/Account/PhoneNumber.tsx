"use client";
import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneNumber: React.FC = () => {
  const [value, setValue] = useState<string | undefined>("");

  const handleChange = (value: string | undefined) => {
    setValue(value);
    if (value && !isValidPhoneNumber(value)) {
      return;
    }
  };
  return (
    <div className="w-full h-max min-h-[60vh] flex justify-start items-center flex-col py-[20px]">
      <div className="w-[22rem]">
        <PhoneInput
          className="phone-input"
          placeholder="Enter phone number"
          value={value}
          onChange={handleChange}
          defaultCountry="SA"
        />
      </div>
      <div></div>
    </div>
  );
};

export default PhoneNumber;

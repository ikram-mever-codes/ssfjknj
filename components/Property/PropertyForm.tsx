import React, { useState } from "react";
import {
  TextField,
  Button,
  Modal,
  Typography,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

type PropertyFormProps = {
  onSubmit: (property: Property) => void;
  handleClose: () => void;
  open: boolean;
};

type Property = {
  name: string;
  domain: string;
};

const PropertyForm: React.FC<PropertyFormProps> = ({
  onSubmit,
  handleClose,
  open,
}) => {
  const [step, setStep] = useState(0);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Property name is required"),
    domain: Yup.string()
      .matches(
        /^[a-zA-Z0-9-]+$/,
        "Domain can only contain letters, numbers, and hyphens"
      )
      .required("Domain is required"),
  });

  const formik = useFormik({
    initialValues: { name: "", domain: "" },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
      handleClose();
    },
  });

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      formik.handleSubmit();
    }
  };

  const handleBack = () => {
    if (step === 0) {
      handleClose();
    } else {
      setStep(step - 1);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center  backdrop-blur-md"
    >
      <div className="bg-white rounded-lg shadow-lg w-[30vw] max-h-[90vh] h-max scroll-bar overflow-auto outline-none border-none relative">
        <div className="w-full border-solid border-b">
          <h1 className="text-primary px-6 py-3 text-[20px] font-semibold text-left ">
            {step === 0 && "Add New Property"}
            {step === 1 && "General Information"}
            {step === 2 && "Features & Layout"}
          </h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="flex flex-col gap-4 p-6"
        >
          {step === 0 && (
            <>
              <div>
                <label
                  className="block text-gray-700 font-medium text-[16px] mb-2"
                  htmlFor="domain"
                >
                  Domain
                </label>
                <TextField
                  id="domain"
                  name="domain"
                  variant="outlined"
                  placeholder="Domain"
                  value={formik.values.domain}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.domain && Boolean(formik.errors.domain)}
                  helperText={formik.touched.domain && formik.errors.domain}
                  sx={{
                    "& .css-112wxke-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        border: "none",
                      },
                  }}
                  InputProps={{
                    style: {
                      height: "3.5rem",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <div className="bg-gray-200 px-3 py-[2px] rounded-md text-primary font-medium text-sm h-[2.5rem] flex items-center">
                          .accez.app
                        </div>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 border-none font-medium text-[16px] mb-2"
                  htmlFor="name"
                >
                  Property Name
                </label>
                <TextField
                  id="name"
                  name="name"
                  variant="outlined"
                  placeholder="Enter property name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  InputProps={{
                    style: { height: "3.5rem" },
                  }}
                  fullWidth
                  sx={{
                    "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input": {
                      border: "none",
                    },
                  }}
                />
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className="">
                <label className="block text-gray-700 font-medium text-[16px] mb-2">
                  Property Type
                </label>

                <TextField
                  sx={{
                    "& .css-1otlk0e-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        border: "none",
                      },
                  }}
                  InputProps={{ style: { height: "3.5rem" } }}
                  select
                  fullWidth
                  placeholder="Select property type"
                >
                  <MenuItem value="Apartment">Apartment</MenuItem>
                  <MenuItem value="Commercial">Commercial</MenuItem>
                  <MenuItem value="Residential">Residential</MenuItem>
                </TextField>
              </div>

              <div>
                <label className="block text-gray-700 font-medium text-[16px] mb-2">
                  About Property
                </label>
                <textarea
                  placeholder="About"
                  className="w-full max-h-[5.5rem] border border-gentleBorder border-solid rounded-md p-3"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium text-[16px] mb-2">
                  Number of Units
                </label>
                <TextField
                  type="number"
                  placeholder="Units"
                  fullWidth
                  InputProps={{
                    style: { height: "3.5rem" },
                  }}
                  sx={{
                    "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input": {
                      border: "none",
                    },
                  }}
                />
              </div>

              <div className="border border-solid p-4 rounded-lg">
                <label className="block text-gray-700 font-medium text-[16px] mb-2">
                  Property Address
                </label>
                <div className="w-full h-max flex justify-items-start items-center gap-3 flex-col ">
                  <TextField
                    className="flex-grow"
                    label={"Flat/House number, Apartment"}
                    fullWidth
                    InputProps={{
                      style: { height: "3.5rem" },
                    }}
                    sx={{
                      "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          border: "none",
                        },
                    }}
                  />
                  <TextField
                    className="flex-grow"
                    label={"City"}
                    fullWidth
                    InputProps={{
                      style: { height: "3.5rem" },
                    }}
                    sx={{
                      "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          border: "none",
                        },
                    }}
                  />
                  <TextField
                    className="flex-grow"
                    label={"Zip Code"}
                    fullWidth
                    InputProps={{
                      style: { height: "3.5rem" },
                    }}
                    sx={{
                      "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          border: "none",
                        },
                    }}
                  />
                  <TextField
                    className="flex-grow"
                    label={"Country"}
                    fullWidth
                    InputProps={{
                      style: { height: "3.5rem" },
                    }}
                    sx={{
                      "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          border: "none",
                        },
                    }}
                  />
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-gray-700 font-medium text-[16px] mb-2">
                  Select Cover Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium text-[16px] mb-2">
                  Select Logo Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium text-[16px] mb-2">
                  Select Features
                </label>
                <div className="flex gap-3 flex-wrap">
                  {[
                    "Access Management",
                    "Amenities",
                    "Market Place",
                    "Community Posts",
                    "Package Management",
                    "Rent Managment",
                    "Community Posts",
                    "Work Orders",
                  ].map((feature, index) => (
                    <button
                      key={index}
                      type="button"
                      className="w-max px-3 py-1 flex justify-center items-center h-[2.5rem] rounded-md border border-gray-300 text-gray-700 font-medium transition-colors duration-300 ease-in-out bg-gray-200  active:bg-primary active:text-white active:shadow-lg"
                      onClick={(e) => {
                        e.currentTarget.classList.toggle("bg-active");
                        e.currentTarget.classList.toggle("text-white");
                        e.currentTarget.classList.toggle("shadow-lg");
                      }}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={handleBack}
              className="w-[5.5rem] h-[2.8rem] border-solid border-2 text-text2 flex justify-center rounded-md gap-2 font-secondary items-center"
            >
              {step === 0 ? "Cancel" : "Back"}
            </button>
            <button
              type="submit"
              className="w-[5.5rem] h-[2.8rem] bg-primary text-white flex justify-center rounded-md gap-2 font-secondary items-center"
            >
              {step < 2 ? "Next" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PropertyForm;

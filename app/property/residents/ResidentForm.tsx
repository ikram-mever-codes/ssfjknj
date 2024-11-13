import { Modal, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ResidentFormProps {
  handleClose: () => void;
  open: boolean;
}

const ResidentForm: React.FC<ResidentFormProps> = ({ handleClose, open }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      unitNo: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      unitNo: Yup.number()
        .required("Unit number is required")
        .typeError("Unit number must be a number"),
      phoneNumber: Yup.number()
        .required("Phone number is required")
        .typeError("Phone number must be a number")
        .positive("Phone number must be positive")
        .integer("Phone number must be an integer")
        .min(1000000000, "Phone number must be 10 digits")
        .max(9999999999, "Phone number must be 10 digits"),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleClose();
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center backdrop-blur-md"
    >
      <div className="bg-white rounded-lg shadow-lg w-[30vw] max-h-[90vh] h-max scroll-bar overflow-auto outline-none border-none relative">
        <div className="w-full border-solid border-b">
          <h1 className="text-primary px-6 py-3 text-[20px] font-semibold text-left ">
            Add Resident
          </h1>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 p-6"
        >
          <div>
            <label className="block text-gray-700 font-medium text-[16px] mb-2">
              Email
            </label>
            <TextField
              type="text"
              placeholder="Email"
              fullWidth
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                style: { height: "3rem" },
              }}
              sx={{
                "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input": {
                  border: "none",
                },
              }}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium text-[16px] mb-2">
              Assign Unit
            </label>
            <TextField
              type="number"
              placeholder="Assign Unit"
              fullWidth
              name="unitNo"
              onChange={formik.handleChange}
              value={formik.values.unitNo}
              error={formik.touched.unitNo && Boolean(formik.errors.unitNo)}
              helperText={formik.touched.unitNo && formik.errors.unitNo}
              InputProps={{
                style: { height: "3rem" },
              }}
              sx={{
                "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input": {
                  border: "none",
                },
              }}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium text-[16px] mb-2">
              Phone Number{" "}
            </label>
            <TextField
              type="text"
              placeholder="Phone Number"
              fullWidth
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              InputProps={{
                style: { height: "3rem" },
              }}
              sx={{
                "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input": {
                  border: "none",
                },
              }}
            />
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              className="w-[5.5rem] h-[2.5rem] border-solid border-2 text-text2 flex justify-center rounded-md gap-2 font-secondary items-center"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-max h-[2.5rem] px-[10px] bg-primary text-white flex justify-center rounded-md gap-2 font-secondary items-center"
            >
              Invite Resident
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ResidentForm;

import { MenuItem, Modal, TextField } from "@mui/material";
import React from "react";
type AddFormProps = {
  handleClose: () => void;
  open: boolean;
};
const AddForm: React.FC<AddFormProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center  backdrop-blur-md"
    >
      <div className="bg-white rounded-lg shadow-lg w-[30vw] max-h-[90vh] h-max scroll-bar overflow-auto outline-none border-none relative">
        <div className="w-full border-solid border-b">
          <h1 className="text-primary px-6 py-3 text-[20px] font-semibold text-left ">
            Add Team Member
          </h1>
        </div>
        <form className="flex flex-col gap-2 p-6">
          <div>
            <label
              className="block text-gray-700 border-none font-medium text-[16px] mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <TextField
              id="name"
              name="name"
              variant="outlined"
              placeholder="Enter property name"
              InputProps={{
                style: { height: "3rem" },
              }}
              fullWidth
              sx={{
                "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input": {
                  border: "none",
                },
              }}
            />
          </div>{" "}
          <div className="">
            <label className="block text-gray-700 font-medium text-[16px] mb-2">
              Role
            </label>

            <TextField
              sx={{
                "& .css-1otlk0e-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                  {
                    border: "none",
                  },
              }}
              InputProps={{ style: { height: "3rem" } }}
              select
              fullWidth
              placeholder="Select property type"
            >
              <MenuItem value="Personal Assistant" selected>
                Personal Assistant
              </MenuItem>
              <MenuItem value="Lease Manager">Lease Manager</MenuItem>
              <MenuItem value="Cleaner">Cleaner</MenuItem>
            </TextField>
          </div>
          <div>
            <label
              className="block text-gray-700 border-none font-medium text-[16px] mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <TextField
              id="email"
              name="email"
              variant="outlined"
              placeholder="Staff Email"
              InputProps={{
                style: { height: "3rem" },
              }}
              fullWidth
              sx={{
                "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input": {
                  border: "none",
                },
              }}
            />
          </div>{" "}
          <div>
            <label
              className="block text-gray-700 border-none font-medium text-[16px] mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <TextField
              id="password"
              name="password"
              variant="outlined"
              placeholder="Enter Password"
              InputProps={{
                style: { height: "3rem" },
              }}
              fullWidth
              sx={{
                "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input": {
                  border: "none",
                },
              }}
            />
          </div>{" "}
          <div>
            <label
              className="block text-gray-700 border-none font-medium text-[16px] mb-2"
              htmlFor="confirm password"
            >
              Confirm Password
            </label>
            <TextField
              id="confirm password"
              name="confirm password"
              variant="outlined"
              placeholder="Confirm Password"
              InputProps={{
                style: { height: "3rem" },
              }}
              fullWidth
              sx={{
                "& .css-1g1n7z-MuiInputBase-input-MuiOutlinedInput-input": {
                  border: "none",
                },
              }}
            />
          </div>{" "}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={handleClose}
              className="w-[5.5rem] h-[2.8rem] border-solid border-2 text-text2 flex justify-center rounded-md gap-2 font-secondary items-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-max px-3  h-[2.8rem] bg-primary text-white flex justify-center rounded-md gap-2 font-secondary items-center"
            >
              Add Member
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddForm;

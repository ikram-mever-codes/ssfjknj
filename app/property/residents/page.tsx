"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Grid,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Add } from "@mui/icons-material";
import ResidentForm from "./ResidentForm";

const residentsData = [
  {
    id: 1,
    avatar: "/path/to/avatar1.jpg",
    email: "john.doe@example.com",
    fullName: "John Doe",
    unitNumber: "101",
    visitors: 2,
    workOrders: 1,
  },
  {
    id: 2,
    avatar: "/path/to/avatar2.jpg",
    email: "jane.smith@example.com",
    fullName: "Jane Smith",
    unitNumber: "102",
    visitors: 0,
    workOrders: 3,
  },
];

const ResidentsPage = () => {
  const [selectedResidents, setSelectedResidents] = useState<number[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentResidentId, setCurrentResidentId] = useState<number | null>(
    null
  );
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allSelected = residentsData.map((resident) => resident.id);
      setSelectedResidents(allSelected);
    } else {
      setSelectedResidents([]);
    }
  };

  const handleSelectResident = (id: number) => {
    setSelectedResidents((prev) =>
      prev.includes(id)
        ? prev.filter((residentId) => residentId !== id)
        : [...prev, id]
    );
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setCurrentResidentId(id);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentResidentId(null);
  };

  const handleDelete = () => {
    handleMenuClose();
  };

  const handleMessage = () => {
    handleMenuClose();
  };

  const handleUpdate = () => {
    handleMenuClose();
  };

  return (
    <Box p={3}>
      <ResidentForm handleClose={handleClose} open={open} />
      <Box display="flex" justifyContent="space-between" mb={2}>
        <h1 className="text-[20px] font-secondary font-bold">Residents</h1>
        <Button
          variant="contained"
          className="bg-buttonSecondary flex justify-center items-center gap-1"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Add /> Add Resident
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className="uppercase text-center">
              <TableCell padding="checkbox">
                <Checkbox
                  onChange={handleSelectAll}
                  checked={selectedResidents.length === residentsData.length}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell className="text-center">Phone</TableCell>
              <TableCell className="text-center">Unit Number</TableCell>
              <TableCell className="text-center">Visitors</TableCell>
              <TableCell className="text-center">Work Orders</TableCell>
              <TableCell className="text-center">Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {residentsData.map((resident) => (
              <TableRow key={resident.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedResidents.includes(resident.id)}
                    onChange={() => handleSelectResident(resident.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="w-max h-max flex text-center justify-start items-center gap-2">
                    <Avatar alt={resident.fullName} src={resident.avatar} />
                    <div className="text-start w-full flex justify-cente items-start gap-1 flex-col">
                      <div className="text-black font-medium">
                        {resident.fullName}
                      </div>
                      <div className="text-text2 font-normal text-[13px]">
                        {resident.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">(91) 343253232</TableCell>
                <TableCell className="text-center">
                  {resident.unitNumber}
                </TableCell>
                <TableCell className="text-center">
                  {resident.visitors}
                </TableCell>
                <TableCell className="text-center">
                  {resident.workOrders}
                </TableCell>
                <TableCell className="text-center">
                  <IconButton
                    onClick={(event) => handleMenuOpen(event, resident.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={
                      Boolean(anchorEl) && currentResidentId === resident.id
                    }
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleDelete}>Delete Resident</MenuItem>
                    <MenuItem onClick={handleMessage}>
                      Message Resident
                    </MenuItem>
                    <MenuItem onClick={handleUpdate}>Update Resident</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ResidentsPage;

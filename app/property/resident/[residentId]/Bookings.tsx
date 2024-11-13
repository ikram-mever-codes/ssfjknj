import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledTableContainer = styled(TableContainer)(() => ({
  maxHeight: "100vh",
  overflowY: "auto",
}));

const Bookings: React.FC = () => {
  const dummyData = [
    {
      orderId: "343534",
      amount: 1000,
      paymentStatus: "Paid",
      amenityType: "Swimming Pool",
      date: {
        date: "16 Oct 2024",
        period: "5:50pm - 8:50pm",
      },
      period: "04:50pm - 05:55pm",
      status: "Booked",
    },
    {
      orderId: "344355",
      amount: 500,
      paymentStatus: "Unpaid",
      amenityType: "Gym",
      date: {
        date: "18 Oct 2024",
        period: "5:50pm - 8:50pm",
      },
      status: "Canceled",
    },
  ];

  return (
    <div className="w-full ">
      <StyledTableContainer className="w-full">
        <Table
          stickyHeader
          className="border-solid border rounded-lg  overflow-hidden"
        >
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Amenity Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.orderId}</TableCell>
                <TableCell>AED {row.amount}</TableCell>
                <TableCell>{row.paymentStatus}</TableCell>
                <TableCell>{row.amenityType}</TableCell>
                <TableCell>
                  <div className="flex text-center justify-start items-start  flex-col">
                    <div>{row.date.date}</div>
                    <div className="text-light">{row.date.period}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <button
                      className={`rounded-full  w-full h-[2.2rem] ${
                        row.status === "Booked"
                          ? "bg-green-400/40 text-green-700"
                          : "bg-red-400/40 text-red-700"
                      } hover:bg-opacity-75`}
                    >
                      {row.status}
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
};

export default Bookings;

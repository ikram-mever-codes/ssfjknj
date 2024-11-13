import VisitorCard from "components/Property/VisitorCard";
import { access } from "fs";
import React from "react";

const Visitors = () => {
  // qrImage: "", Add Qr Image Later
  const visitors = [
    {
      name: "Peter Parker",
      email: "peter9707@gmail.com",
      serviceId: "3243",
      validity: "16 Oct - 20 Oct",
      contact: "+123 456 7890",
      access: "Unit 109",
    },
    {
      name: "Thomas Salva",
      email: "mr.salva09@gmail.com",
      serviceId: "3244",
      validity: "15 Oct - 21 Oct",
      contact: "+133 456 7670",
      access: "Unit 110",
    },
    {
      name: "Harrison",
      email: "harry5625@gmail.com",
      serviceId: "3246",
      validity: "14 Oct - 18 Oct",
      contact: "+113 212 7230",
      access: "Unit 89",
    },
  ];
  return (
    <div className="w-full grid grid-cols-2 gap-4 h-full ">
      {visitors.map((visitors) => {
        return (
          <VisitorCard
            name={visitors.name}
            email={visitors.email}
            access={visitors.access}
            serviceId={visitors.serviceId}
            validity={visitors.validity}
            contact={visitors.contact}
          />
        );
      })}
    </div>
  );
};

export default Visitors;

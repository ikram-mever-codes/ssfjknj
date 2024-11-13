import EventsCard from "components/Property/EventsCard";
import React from "react";

const Events: React.FC = () => {
  return (
    <div className="w-full  flex justify-start items-center flex-col gap-4 overflow-x-hidden h-[60vh] overflow-y-auto scroll-bar">
      <div className="font-medium text-[16px] text-left w-full">
        Upcoming Events
      </div>
      <div className="w-full grid grid-cols-3 gap-4 pr-0  h-max  ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
          return (
            <EventsCard
              title="Lounge Inaugration"
              date="6 Nov, 2024"
              time="12:00 PM"
              location="Lahore"
              image="https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;

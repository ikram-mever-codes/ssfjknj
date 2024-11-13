import WorkOrderCard from "components/Property/WorkOrderCard";
import React from "react";

const WorkOrders = () => {
  const workOrders = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="w-full grid grid-cols-2 gap-4 h-full ">
      {workOrders.map((wq) => {
        return (
          <WorkOrderCard
            ID={"13244"}
            createdAt={`${Date.now()}`}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laudantium vel culpa dolorem repellendus rerum temporibus neque, modi quo consequuntur."
            }
            image={
              "https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Fan and Lights Repairing"}
          />
        );
      })}
    </div>
  );
};

export default WorkOrders;

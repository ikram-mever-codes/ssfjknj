"use client";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Events from "./Events";

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const defaultTab = "events";
  const currentTab = searchParams.get("tab") || defaultTab;

  const [activeTab, setActiveTab] = React.useState(currentTab);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const newUrl = `${pathname}?tab=${tab}`;
    window.history.pushState(null, "", newUrl);
  };

  useEffect(() => {
    if (!searchParams.get("tab")) {
      const newUrl = `${pathname}?tab=${defaultTab}`;
      window.history.replaceState(null, "", newUrl);
      setActiveTab(defaultTab);
    }
  }, [searchParams, pathname]);

  return (
    <div className="w-full h-max p-3 py-6 flex justify-start items-center flex-col">
      <div className="w-full h-max ">
        <h5 className="font-semibold font-secondary text-[22px]">Community</h5>
        <div className="w-full h-max flex justify-between items-center">
          <div className="w-max h-max flex justify-start items-center gap-4 mt-4">
            <button
              className={`font-secondary w-[10rem] h-[2.5rem] rounded-lg ${
                activeTab === "events"
                  ? "border border-solid text-black"
                  : "text-text2"
              }`}
              onClick={() => handleTabChange("events")}
            >
              Events
            </button>
            <button
              className={`font-secondary w-[10rem] h-[2.5rem] rounded-lg ${
                activeTab === "marketplace"
                  ? "border border-solid text-black"
                  : "text-text2"
              }`}
              onClick={() => handleTabChange("marketplace")}
            >
              Marketplace
            </button>
            <button
              className={`font-secondary w-[10rem] h-[2.5rem] rounded-lg ${
                activeTab === "feed"
                  ? "border border-solid text-black"
                  : "text-text2"
              }`}
              onClick={() => handleTabChange("feed")}
            >
              Feed
            </button>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4285F4",
              ":hover": {
                backgroundColor: "#3367D6",
              },
              // height: "3rem",
            }}
            startIcon={<Add />}
          >
            Create New Event
          </Button>
        </div>
      </div>
      <div className="w-full h-max pt-6">
        {activeTab === "events" && <Events />}
        {activeTab === "marketplace" && <div>Marketplace Content</div>}
        {activeTab === "feed" && <div>Feed Content</div>}
      </div>
    </div>
  );
};

export default Page;

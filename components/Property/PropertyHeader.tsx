import React, { useRef, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Tabs, Tab } from "@mui/material";

const PropertyHeader: React.FC = () => {
  const router = useRouter();
  const path = usePathname().split("/")[2] || "/";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newTab: string) => {
    router.push(`/property/${newTab}`);
  };

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        setIsScrollable(scrollWidth > clientWidth);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  return (
    <header className="w-full h-max overflow-hidden relative">
      <div
        ref={scrollRef}
        className={`overflow-x-auto scrollbar-hidden whitespace-nowrap ${
          isScrollable ? "pr-10" : ""
        }`}
      >
        <Tabs
          value={path}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          className="border-b border-solid"
        >
          <Tab label="Overview" value="/" />
          <Tab label="Residents" value="residents" />
          <Tab label="Work Orders" value="work-orders" />
          <Tab label="Packages" value="packages" />
          <Tab label="Community" value="community" />
          <Tab label="Amenities" value="amenities" />
          <Tab label="Messages" value="messages" />
          <Tab label="My team" value="my-team" />
          <Tab label="Billing" value="billing" />
          <Tab label="Visitors" value="visitors" />
          <Tab label="Reports" value="reports" />
          <Tab label="Settings" value="settings" />
        </Tabs>
      </div>
    </header>
  );
};

export default PropertyHeader;

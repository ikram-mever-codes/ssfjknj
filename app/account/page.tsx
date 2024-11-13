import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import ChangePassword from "components/Account/ChangePassword";
import EditProfile from "components/Account/EditProfile";
import PhoneNumber from "components/Account/PhoneNumber";
import React from "react";

const Page: React.FC = () => {
  return (
    <div>
      <Tabs isFitted position="relative" variant="unstyled">
        <TabList className="overflow-x-scroll hide-scrollbar">
          <Tab className=" uppercase text-nowrap font-[500]">
            Profile Settings
          </Tab>
          <Tab className="font-[500] uppercase text-nowrap"> Phone Numbers</Tab>
          <Tab className="font-[500] uppercase text-nowrap">
            Change Password
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          //   bg="#0F1112"
          bg="blue.700"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <EditProfile />
          </TabPanel>
          <TabPanel>
            <PhoneNumber />
          </TabPanel>
          <TabPanel>
            <ChangePassword />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Page;

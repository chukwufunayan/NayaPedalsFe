import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Content } from "./content";

export const DetailsTab = () => {
  return (
    <Tabs isLazy marginTop={"1.5rem"}>
      <TabList>
        <Tab>Details</Tab> <Tab>Shipping</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Content tabNum={1} />
        </TabPanel>
        <TabPanel>
          <Content tabNum={2} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

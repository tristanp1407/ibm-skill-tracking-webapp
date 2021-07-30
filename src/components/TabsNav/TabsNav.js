import React from "react";
import { Tabs, Tab } from "carbon-components-react";
import SkillsOverview from "../../content/ManagerView/ManagerDashboard/SkillsOverview/SkillsOverview";
import PeopleSearch from "../../content/ManagerView/ManagerDashboard/PeopleSearch/PeopleSearch";

const TabsNav = () => {
  const props = {
    tabs: {
      selected: 0,
      role: "navigation",
    },
    tab: {
      role: "presentation",
      tabIndex: 0,
    },
  };

  return (
    <Tabs {...props.tabs} aria-label="Page navigation">
      <Tab {...props.tab} label="Skills Overview">
        <SkillsOverview />
      </Tab>
      <Tab {...props.tab} label="People">
        <PeopleSearch />
      </Tab>
    </Tabs>
  );
};

export default TabsNav;

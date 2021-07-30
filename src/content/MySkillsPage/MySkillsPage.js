import React from "react";
import MySkillsTable from "../../components/MySkillsPage/MySkillsTable/MySkillsTable";
import MySkillsSelect from "../../components/MySkillsPage/MySkillsSelect/MySkillsSelect";

const MySkillsPage = () => {
  return (
    <>
      <h1>My Skills Page</h1>
      <MySkillsSelect />

      <MySkillsTable />
    </>
  );
};

export default MySkillsPage;

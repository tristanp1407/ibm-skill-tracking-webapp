import React, { useState } from "react";
import styled from "styled-components";
import { Select, SelectItem, Button } from "carbon-components-react";
import { Add16 } from "@carbon/icons-react";

const data = {
  groups: ["Group 1", "Group 2", "Group 3"],
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  experience: [
    "Training",
    "Project Experience",
    "Project Experience + Training",
    "Project Managed",
  ],
  group: [
    {
      name: "Group 1",
      skills: [
        "A skill from Group 1",
        "A skill from Group 1",
        "A skill from Group 1",
        "A skill from Group 1",
        "A skill from Group 1",
        "A skill from Group 1",
        "A skill from Group 1",
        "A skill from Group 1",
        "A skill from Group 1",
        "A skill from Group 1",
      ],
    },
    {
      name: "Group 2",
      skills: [
        "A skill from Group 2",
        "A skill from Group 2",
        "A skill from Group 2",
        "A skill from Group 2",
        "A skill from Group 2",
        "A skill from Group 2",
        "A skill from Group 2",
        "A skill from Group 2",
      ],
    },
    {
      name: "Group 3",
      skills: [
        "A skill from Group 3",
        "A skill from Group 3",
        "A skill from Group 3",
        "A skill from Group 3",
        "A skill from Group 3",
        "A skill from Group 3",
        "A skill from Group 3",
        "A skill from Group 3",
        "A skill from Group 3",
        "A skill from Group 3",
      ],
    },
  ],
};

const AllSearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 4rem 0;
`;

const OneSearchWrapper = styled.div`
  width: 20rem;
  margin-right: 2rem;
`;

const MySkillsSelect = () => {
  const props = {
    selectGroup: {
      size: "xl",
      labelText: "Group",
    },
    selectSkill: {
      size: "xl",
      labelText: "Skill",
    },
    selectExperience: {
      size: "xl",
      labelText: "Experience",
    },
  };

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const logAll = () => {
    console.log(selectedGroup);
    console.log(selectedSkill);
    console.log(selectedExperience);
  };

  const handleGroupSelect = (event) => {
    let i = event.target.options.selectedIndex;
    let groupName = event.target.options[i].text;
    setSelectedGroup(groupName);
  };
  const handleSkillSelect = (event) => {
    let i = event.target.options.selectedIndex;
    let skillName = event.target.options[i].text;
    setSelectedSkill(skillName);
  };

  const handleExperienceSelect = (event) => {
    let i = event.target.options.selectedIndex;
    let expName = event.target.options[i].text;
    setSelectedExperience(expName);
  };

  const renderSkills = () => {
    let oneGroup = data.group.find(({ name }) => name === selectedGroup);
    let skillsList = oneGroup.skills.map((skill) => {
      return <SelectItem text={skill} />;
    });
    return skillsList;
  };
  return (
    <AllSearchWrapper>
      <OneSearchWrapper>
        <Select
          {...props.selectGroup}
          defaultValue="placeholder-item"
          onChange={() => handleGroupSelect(event)}
        >
          <SelectItem
            disabled
            hidden
            value="placeholder-item"
            text="Select Group"
          />
          {data.groups.map((group) => {
            return <SelectItem text={group} />;
          })}
        </Select>
      </OneSearchWrapper>
      <OneSearchWrapper>
        <Select
          {...props.selectSkill}
          defaultValue="placeholder-item"
          onChange={() => handleSkillSelect(event)}
          disabled={selectedGroup ? false : true}
        >
          <SelectItem
            disabled
            hidden
            value="placeholder-item"
            text="Select Skill"
          />
          {selectedGroup ? renderSkills() : null}
        </Select>
      </OneSearchWrapper>

      <OneSearchWrapper>
        <Select
          {...props.selectExperience}
          defaultValue="placeholder-item"
          onChange={() => handleExperienceSelect(event)}
          disabled={selectedGroup && selectedSkill ? false : true}
        >
          <SelectItem
            disabled
            hidden
            value="placeholder-item"
            text="Select Experience"
          />
          {data.experience.map((exp) => {
            return <SelectItem text={exp} />;
          })}
        </Select>
      </OneSearchWrapper>
      <Button
        style={{ height: "2.5rem" }}
        renderIcon={Add16}
        onClick={() => logAll()}
      >
        Add
      </Button>
    </AllSearchWrapper>
  );
};

export default MySkillsSelect;

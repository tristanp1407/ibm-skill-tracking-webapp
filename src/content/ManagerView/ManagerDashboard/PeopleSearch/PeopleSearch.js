import React, { useState } from "react";
import styled from "styled-components";
import { Search, Tile } from "carbon-components-react";
import data from "./dummyData";
import BluePagesIcon from "../../../../assets/bluepages.svg";

const TileWrapper = styled.div`
  margin: 3rem 0;
  width: 30rem;
`;

const NameIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  height: 2rem;
  margin: 0 1rem;
  cursor: pointer;
`;

const PersonEmail = styled.div`
  margin: 0.5rem 0;
`;

const AllSkills = styled.div`
  margin: 2rem 0;
`;

const OneSkill = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;

  h6 {
    width: 10rem;
  }
`;

const PeopleSearch = () => {
  const [matches, setMatches] = useState(null);

  const handleChange = (event) => {
    if (event.target.value) {
      const matches = data.filter(({ name }) =>
        name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setMatches(matches);
    }
  };

  const openBluePages = (email) => {
    let url = "https://w3.ibm.com/bluepages/?s=" + email;
    window.open(url, "_blank");
  };

  return (
    <>
      <h3>Search DPS Team</h3>
      <Search
        style={{ width: "30rem", margin: "3rem 0" }}
        placeHolderText="Search for Bridget van Kralingen or Arvind Krishna"
        size="xl"
        id="search-people"
        onChange={() => handleChange(event)}
        labelText=""
      />
      <TileWrapper>
        {matches
          ? matches.map((match) => {
              return (
                <TileWrapper>
                  <Tile>
                    <NameIconWrapper>
                      <h2>{match.name}</h2>

                      <Icon
                        src={BluePagesIcon}
                        onClick={() => openBluePages(match.email)}
                      />
                    </NameIconWrapper>
                    <PersonEmail>
                      <a href={"mailto:" + match.email}>{match.email}</a>
                    </PersonEmail>
                    <AllSkills>
                      <h3>Skills</h3>
                      {match.skills.map((skill) => {
                        return (
                          <OneSkill>
                            <h6>
                              <strong>{skill.name}</strong>
                            </h6>
                            <h6>{skill.experience}</h6>
                          </OneSkill>
                        );
                      })}
                    </AllSkills>
                  </Tile>
                </TileWrapper>
              );
            })
          : null}
      </TileWrapper>
    </>
  );
};

export default PeopleSearch;

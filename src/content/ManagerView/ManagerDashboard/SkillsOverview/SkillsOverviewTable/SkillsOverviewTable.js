import React from "react";
import allTables from "./dummy_data";
import styled from "styled-components";
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
} from "carbon-components-react";

const TableWrapper = styled.div`
  max-width: 40rem;
  margin: 3rem 0;
`;
const OnePersonWrapper = styled.div`
  display: flex;
`;

const PersonName = styled.h6`
  min-width: 14rem;
`;

const headers = [
  {
    key: "skill",
    header: "Skill",
  },
  {
    key: "cumulativeExperience",
    header: "Cumulative Experience",
  },
];

const SkillsOverviewTable = () => {
  const getPeople = (rowId, catName) => {
    //find right category
    const cat = allTables.find(({ categoryName }) => categoryName === catName);
    //find skills in category
    const row = cat.skills.find(({ id }) => id === rowId);
    return row.people.map((person) => {
      return (
        <OnePersonWrapper>
          <PersonName>{person.name}</PersonName>
          <h6>{person.experience}</h6>
        </OnePersonWrapper>
      );
    });
  };

  return allTables.map((table) => {
    return (
      <TableWrapper>
        <DataTable rows={table.skills} headers={headers}>
          {({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getTableProps,
            getTableContainerProps,
          }) => (
            <TableContainer
              title={table.categoryName}
              description="Tip: Expand to see people"
              {...getTableContainerProps()}
            >
              <Table {...getTableProps()} size="short">
                <TableHead>
                  <TableRow>
                    <TableExpandHeader />
                    {headers.map((header, i) => (
                      <TableHeader key={i} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <React.Fragment key={row.id}>
                      <TableExpandRow {...getRowProps({ row })}>
                        {row.cells.map((cell) => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableExpandRow>
                      <TableExpandedRow
                        colSpan={headers.length + 1}
                        className="demo-expanded-td"
                      >
                        {getPeople(row.id, table.categoryName)}
                      </TableExpandedRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </TableWrapper>
    );
  });
};

export default SkillsOverviewTable;

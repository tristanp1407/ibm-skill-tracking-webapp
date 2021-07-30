import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  DataTable,
  Table,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
} from "carbon-components-react";

import { Delete16 } from "@carbon/icons-react";

const TableWrapper = styled.div`
  max-width: 80rem;
`;

let data = [
  {
    id: "a",
    skill: "Tableau",
    experience: "Training",
    dateUpdated: "21/07/2021",
  },
  {
    id: "b",
    skill: "Python",
    experience: "Training + Project Experience",
    dateUpdated: "21/07/2021",
  },
  { id: "c", skill: "SQL", experience: "Training", dateUpdated: "21/07/2021" },
];

const headers = [
  {
    key: "skills",
    header: "Skills",
  },
  {
    key: "experience",
    header: "Experience",
  },
  {
    key: "dateUpdated",
    header: "Date Updated",
  },
];

const MySkillsTable = () => {
  const batchActionClick = (selectedRows) => {};
  const [rows, setRows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //todo: trigger on delete row to update table
  //todo: trigger on add skill to update table
  useEffect(() => {
    let x = data.map((el) => {
      return {
        id: el.id,
        skills: el.skill,
        experience: el.experience,
        dateUpdated: el.dateUpdated,
      };
    });
    setRows(x);
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (!isLoading)
    return (
      <TableWrapper>
        <DataTable rows={rows} headers={headers}>
          {({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getSelectionProps,
            getToolbarProps,
            getBatchActionProps,
            selectedRows,
            getTableProps,
            getTableContainerProps,
          }) => (
            <TableContainer
              title="My Skills"
              description="You can delete skills by selecting them and clicking the delete button."
              {...getTableContainerProps()}
            >
              <TableToolbar {...getToolbarProps()}>
                <TableBatchActions {...getBatchActionProps()}>
                  <TableBatchAction
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? 0 : -1
                    }
                    renderIcon={Delete16}
                    onClick={batchActionClick(selectedRows)}
                  >
                    Delete
                  </TableBatchAction>
                </TableBatchActions>
              </TableToolbar>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    <TableSelectAll {...getSelectionProps()} />
                    {headers.map((header, i) => (
                      <TableHeader key={i} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i} {...getRowProps({ row })}>
                      <TableSelectRow {...getSelectionProps({ row })} />
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </TableWrapper>
    );
};

export default MySkillsTable;

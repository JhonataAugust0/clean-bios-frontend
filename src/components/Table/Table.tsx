import React from 'react';
import styled from 'styled-components';

interface TableProps {
  data: any[];
  columns: string[];
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #70AE6E;
  color: #FFFFFF;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #000000;
  text-align: center;
  vertical-align: middle;
`;

export const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <StyledTable>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column}>{column}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column}>{row[column]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

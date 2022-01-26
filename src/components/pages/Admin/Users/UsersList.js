import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';

const UsersList = () => {
    return (
        <TableContainer className="tableContainer">
      <Table size="small" aria-label="a dense table">
      <TableHead className="tableHeader">
          <TableRow className="tableRow">
            <TableCell >ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>UserType</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
        <TableRow className="tableRow">
              <TableCell>1</TableCell>
              <TableCell>Tanvir</TableCell>
              <TableCell>Hello</TableCell>
              <TableCell>Subscription Type</TableCell>
              <TableCell>
              <i class="fas fa-ellipsis-h"></i>
              </TableCell>
            </TableRow>
        <TableRow className="tableRow">
              <TableCell>1</TableCell>
              <TableCell>Tanvir</TableCell>
              <TableCell>Hello</TableCell>
              <TableCell>Subscription Type</TableCell>
              <TableCell>
              <i class="fas fa-ellipsis-h"></i>
              </TableCell>
            </TableRow>
        <TableRow className="tableRow">
              <TableCell>1</TableCell>
              <TableCell>Tanvir</TableCell>
              <TableCell>Hello</TableCell>
              <TableCell>Subscription Type</TableCell>
              <TableCell sx='mx-auto'>
              <i class="fas fa-ellipsis-h"></i>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default UsersList;
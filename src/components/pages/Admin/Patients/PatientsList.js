import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';

const PatientsList = () => {
    return (
        <TableContainer >
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
      <TableHead style={{backgroundColor: '#F1F4F7', borderRadius: '30px' }}>
          <TableRow>
            <TableCell >ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Email Susbscription</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >
              <TableCell>1</TableCell>
              <TableCell>Tanvir</TableCell>
              <TableCell>Hello</TableCell>
              <TableCell>Subscription Type</TableCell>
              <TableCell>
              <i class="fas fa-ellipsis-h"></i>
              </TableCell>
            </TableRow>
        <TableRow >
              <TableCell>1</TableCell>
              <TableCell>Tanvir</TableCell>
              <TableCell>Hello</TableCell>
              <TableCell>Subscription Type</TableCell>
              <TableCell>
              <i class="fas fa-ellipsis-h"></i>
              </TableCell>
            </TableRow>
        <TableRow >
              <TableCell>1</TableCell>
              <TableCell>Tanvir</TableCell>
              <TableCell>Hello</TableCell>
              <TableCell>Subscription Type</TableCell>
              <TableCell>
              <i class="fas fa-ellipsis-h"></i>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default PatientsList;

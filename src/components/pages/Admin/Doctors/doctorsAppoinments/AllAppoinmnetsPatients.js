import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const AllAppoinmnetsPatients = () => {
    return (
        <TableContainer style={{ marginBottom: '40px' }} className="tableContainer">
        <Table size="small" aria-label="a dense table">
            <TableHead className="tableHeader">
                <TableRow className="tableRow">
                    <TableCell>Patients Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Confirmed</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody className="tableBody">
                <TableRow className="tableRow">
                    <TableCell>1</TableCell>
                    <TableCell>Tanvir</TableCell>
                    <TableCell>Hello</TableCell>
                    <TableCell>Subscription Type</TableCell>
                    <TableCell>Yes</TableCell>
                    <TableCell>
                        <i className="fas fa-ellipsis-h"></i>
                    </TableCell>
                </TableRow>
                <TableRow className="tableRow">
                    <TableCell>1</TableCell>
                    <TableCell>Tanvir</TableCell>
                    <TableCell>Hello</TableCell>
                    <TableCell>Subscription Type</TableCell>
                    <TableCell>Yes</TableCell>
                    <TableCell>
                        <i className="fas fa-ellipsis-h"></i>
                    </TableCell>
                </TableRow>

            </TableBody>
        </Table>
    </TableContainer>
    );
};

export default AllAppoinmnetsPatients;
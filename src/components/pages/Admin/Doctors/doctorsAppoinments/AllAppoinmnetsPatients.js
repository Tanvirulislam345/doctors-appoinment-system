import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const AllAppoinmnetsPatients = () => {
    return (
        <TableContainer style={{ marginBottom: '40px' }}>
        <Table size="small" aria-label="a dense table">
            <TableHead style={{ backgroundColor: '#F1F4F7' }}>
                <TableRow >
                    <TableCell>Patients Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Confirmed</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                    <TableCell>1</TableCell>
                    <TableCell>Tanvir</TableCell>
                    <TableCell>Hello</TableCell>
                    <TableCell>Subscription Type</TableCell>
                    <TableCell>Yes</TableCell>
                    <TableCell>
                        <i className="fas fa-ellipsis-h"></i>
                    </TableCell>
                </TableRow>
                <TableRow >
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
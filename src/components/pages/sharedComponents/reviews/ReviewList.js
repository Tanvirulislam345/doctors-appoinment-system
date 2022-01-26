import {
    Avatar,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";
import * as React from "react";

const ReviewList = () => {
    return (
        <TableContainer style={{ borderRadius: '20px', marginBottom: '40px' }}>
            <Table size="small" aria-label="a dense table">
                <TableHead className="tableHeader">
                    <TableRow className="tableRow">
                        <TableCell>Patient Name</TableCell>
                        <TableCell>Review Date</TableCell>
                        <TableCell>Review Rate</TableCell>
                        <TableCell>Approved</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody  className="tableBody">
                    <TableRow  className="tableRow">
                        <TableCell>1</TableCell>
                        <TableCell>1/11/12</TableCell>
                        <TableCell>Hello</TableCell>
                        <TableCell>Subscription Type</TableCell>
                        <TableCell>
                            <i class="fas fa-ellipsis-h"></i>
                        </TableCell>
                    </TableRow>
                    <TableRow  className="tableRow">
                        <TableCell>1</TableCell>
                        <TableCell>1/11/12</TableCell>
                        <TableCell>Hello</TableCell>
                        <TableCell>Subscription Type</TableCell>
                        <TableCell>
                            <i class="fas fa-ellipsis-h"></i>
                        </TableCell>
                    </TableRow>
                    <TableRow  className="tableRow">
                        <TableCell>1</TableCell>
                        <TableCell>1/11/12</TableCell>
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

export default ReviewList;
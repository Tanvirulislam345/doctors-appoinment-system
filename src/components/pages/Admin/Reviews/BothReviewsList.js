import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,

} from "@material-ui/core";
import * as React from "react";

const BothReviewsList = () => {
    return (
        <TableContainer className="tableContainer">
            <Table size="small" aria-label="a dense table">
                <TableHead className="tableHeader">
                    <TableRow className="tableRow">
                        <TableCell>Doctors</TableCell>
                        <TableCell>Patients</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Score</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="tableBody">
                    <TableRow className="tableRow">
                        <TableCell>tanvir</TableCell>
                        <TableCell>Hello</TableCell>
                        <TableCell>12/12/22</TableCell>
                        <TableCell>4.28</TableCell>
                        <TableCell>
                            <i className="fas fa-ellipsis-h"></i>
                        </TableCell>
                    </TableRow>
                    <TableRow className="tableRow">
                        <TableCell>tanvir</TableCell>
                        <TableCell>Hello</TableCell>
                        <TableCell>12/12/22</TableCell>
                        <TableCell>4.28</TableCell>
                        <TableCell>
                            <i className="fas fa-ellipsis-h"></i>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BothReviewsList;
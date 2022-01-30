import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const ReviewList = () => {
    const [patientsReviews, setPatientsReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:7000/patients-reviews")
            .then(res => res.json())
            .then(data => setPatientsReviews(data))
    }, []);

    return (
        <TableContainer className="tableContainer">
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
                <TableBody className="tableBody">
                    {
                        patientsReviews.map(reviews =>
                            <TableRow
                                key={reviews._id}
                                className="tableRow">
                                <TableCell>{reviews.firstName} {reviews.lastName}</TableCell>
                                <TableCell>{reviews.date}</TableCell>
                                <TableCell>{reviews.reviewscore}</TableCell>
                                <TableCell>{reviews.approved}</TableCell>
                                <TableCell>
                                    <i className="fas fa-ellipsis-h"></i>
                                </TableCell>
                            </TableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReviewList;
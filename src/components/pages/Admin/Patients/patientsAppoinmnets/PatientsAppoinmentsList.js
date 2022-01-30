import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const PatientsAppoinmentsList = () => {
    const [patientsAppoinmentList, setPatientsAppoinmentList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7000/patients-appoinments")
            .then(res => res.json())
            .then(data => setPatientsAppoinmentList(data))
    }, []);

    return (
        <TableContainer className="tableContainer">
            <Table size="small" aria-label="a dense table">
                <TableHead className="tableHeader">
                    <TableRow className="tableRow">
                        <TableCell>Doctor</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Confirmed</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="tableBody">
                    {
                        patientsAppoinmentList.map(patients =>
                            <TableRow
                                key={patients._id}
                                className="tableRow"
                            >
                                <TableCell>{patients.doctorsName}</TableCell>
                                <TableCell>{patients.date}</TableCell>
                                <TableCell>{patients.time}</TableCell>
                                <TableCell>public</TableCell>
                                <TableCell>Yes</TableCell>
                                <TableCell>
                                    <i class="fas fa-ellipsis-h"></i>
                                </TableCell>
                            </TableRow>)
                    }


                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PatientsAppoinmentsList;

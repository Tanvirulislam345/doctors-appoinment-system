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
                <TableHead style={{ backgroundColor: '#F1F4F7' }}>
                    <TableRow >
                        <TableCell>Patient Name</TableCell>
                        <TableCell>Review Date</TableCell>
                        <TableCell>Review Rate</TableCell>
                        <TableCell>Approved</TableCell>
                        <TableCell></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell >
                            <Box style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Typography
                                    variant="body2"
                                    gutterBottom
                                    style={{ marginLeft: "20px" }}
                                >
                                    Tanvir
                                </Typography>
                            </Box>
                        </TableCell>
                        <TableCell>Hello</TableCell>
                        <TableCell>Subscription Type</TableCell>
                        <TableCell>
                            <i class="fas fa-ellipsis-h"></i>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell >
                            <Box style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Typography
                                    variant="body2"
                                    gutterBottom
                                    style={{ marginLeft: "20px" }}
                                >
                                    Tanvir
                                </Typography>
                            </Box>
                        </TableCell>
                        <TableCell>Hello</TableCell>
                        <TableCell>Subscription Type</TableCell>
                        <TableCell>
                            <i class="fas fa-ellipsis-h"></i>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell >
                            <Box style={{ display: "flex", justifyContent: 'start', alignItems: "center" }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Typography
                                    variant="body2"
                                    gutterBottom
                                    style={{ marginLeft: "20px" }}
                                >
                                    Tanvir
                                </Typography>
                            </Box>
                        </TableCell>
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
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

const DoctorsList = () => {
  return (
    <TableContainer className="tableContainer">
      <Table  size="small" aria-label="a dense table">
        <TableHead className="tableHeader">
          <TableRow className="tableRow">
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Specialty</TableCell>
            <TableCell>Subscription Type</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tableBody">
          <TableRow className="tableRow">
            <TableCell>1</TableCell>
            <TableCell>
             <Box  style={{ display: "flex", justifyContent: 'start',alignItems: "center" }}>
             <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  style={{ marginRight: "20px" }} />
              Tanvir
             </Box>
            </TableCell>
            <TableCell>Hello</TableCell>
            <TableCell>Subscription Type</TableCell>
            <TableCell>
              <i class="fas fa-ellipsis-h"></i>
            </TableCell>
          </TableRow>
          <TableRow className="tableRow">
            <TableCell>1</TableCell>
            <TableCell>
             <Box  style={{ display: "flex", justifyContent: 'start',alignItems: "center" }}>
             <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  style={{ marginRight: "20px" }} />
              Tanvir
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

export default DoctorsList;

import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



const UsersList = () => {

  const [allusers, setAllusers] = useState([])

  useEffect(() => {
    fetch("http://localhost:7000/users")
      .then(res => res.json())
      .then(data => setAllusers(data))
  }, []);

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
          {
            allusers.map(user =>
              <TableRow
                key={user._id}
                className="tableRow"
              >
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.firstName} {user.lastName}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.role}</TableCell>
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

export default UsersList;
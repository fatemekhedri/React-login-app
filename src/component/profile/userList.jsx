import React, { useEffect, useState,memo } from "react";
// import axios from "axios";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
} from "@mui/material";

const UserList = memo((userList) => {
  console.log("userList in selfesh", userList);
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>

            <TableCell>Email</TableCell>
            <TableCell>Fist Name</TableCell>
            <TableCell>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(userList) &&
            Object.values(userList).map((usr, usrIndx) => (
              <TableRow
                key={usrIndx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar
                    alt="usr.first_name"
                    src={usr.avatar}
                    sx={{ width: 70, height: 70 }}
                  />
                </TableCell>
                <TableCell>{usr.email}</TableCell>
                <TableCell>{usr.first_name}</TableCell>
                <TableCell>{usr.last_name}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
})
export default UserList;

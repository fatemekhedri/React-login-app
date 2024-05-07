import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../component/profile/userList";
import UserComponent from "../component/profile/userComponent";
import { Grid, Box } from "@mui/material";

const Profile = () => {
  // const [pageNumber, setPageNumber] = useState("1");
  const [userList, SetUserList] = useState([]);
  const [profileUser, setProfileUser] = useState({});
  useEffect(() => {
    // Read a authenticated user to search for its name among the list of users
    const currentUser = JSON.parse(localStorage.getItem("user"));

    // Getting the list of all users and filtering the authenticated user and displaying its information and the list of users
    axios
      .get(`https://reqres.in/api/users?page=1`)
      .then((response) => {
        if (response?.data?.data && response?.data?.total) {
          return axios.get(
            `https://reqres.in/api/users?per_page=${response?.data?.total}`
          );
        }
      })
      .then((res) => {
        const data = res.data.data || [];

        let currentUserInfo =
          data.filter((usr) => usr.email == currentUser.email)[0] || {};

        setProfileUser(currentUserInfo);
        SetUserList(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* Display authenticated user information */}
          <UserComponent {...profileUser} />
        </Grid>
        {/* Show all users */}
        <Grid item xs={9}>
          <UserList {...userList} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Profile;

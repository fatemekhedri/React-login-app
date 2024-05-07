import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../component/profile/userList";
import UserComponent from "../component/profile/userComponent";
import { Grid, Box } from "@mui/material";

const Profile = () => {
  const [pageNumber, setPageNumber] = useState("1");
  const [userList, SetUserList] = useState([]);
  const [profileUser, setProfileUser] = useState({});
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    console.log("currentUser", currentUser);
    axios
      .get(`https://reqres.in/api/users?page=${pageNumber}`)
      .then((response) => {
        if (response?.data?.data && response?.data?.total) {
          return axios.get(
            `https://reqres.in/api/users?per_page=${response?.data?.total}`
          );
        }
      })
      .then((res) => {
        console.log("new res", res);
        const data = res.data.data || [];
        console.log("data", data);
        let currentUserInfo =
          data.filter((usr) => usr.email == currentUser.email)[0] || {};
        console.log("currentUserInfo", currentUserInfo);
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
          <UserComponent {...profileUser} />
        </Grid>
        <Grid item xs={9}>
          <UserList {...userList} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Profile;

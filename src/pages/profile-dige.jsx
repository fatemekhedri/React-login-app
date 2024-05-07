import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/2`)
      .then((res) => {
        console.log("result", res);
        // const { data } = res;
        // localStorage.setItem("token", data.token || "");
        // navigate("/dashboard/profile");
      })
      .catch((err) => {
        console.log("err for login");
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${pageNumber}`)
      .then((res) => {
        console.log("result", res);
        // const { data } = res;
        const data = res.data.data || [];
        console.log("data", data);
        let currentUserInfo =
          data.filter((usr) => usr.email == currentUser.email)[0] || {};
        // if (currentUserInfo) {
        //   setUserpRofile(currentUserInfo);
        // }
        console.log("currentUserInfo", currentUserInfo);
        let currentUserUpdatedInfo = {
          ...currentUser,
          id: currentUserInfo.id || null,
        };
        localStorage.setItem("user", JSON.stringify(currentUserUpdatedInfo));
        localStorage.setItem("total-page", res?.data?.total || "");

        // https://reqres.in/api/users?per_page=12
        // https://reqres.in/api/users?page=1&per_page=12
        // navigate("/dashboard/profile");
      })
      .catch((err) => {
        console.log("err for login");
      });
  }, []);
  return <div>testt</div>;
};
export default Profile;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Container } from "@mui/material";

import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const tempUser = {
    //   email: "eve.holt@reqres.in",
    //   password: "cityslicka",
    // };
    // User authentication
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((res) => {
        
        const { data } = res;
        const user = {
          email: email,
          token: data.token || "",
        };
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log("err for login");
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography p={5} variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="email"
          label="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          id="password"
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          p={4}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Login
        </Button>
      </form>
    </Container>
  );
};
export default Login;

import React from "react";

import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Typography
      sx={{
        flex: 1,
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ display: "inline-flex", mb: 3 }}>
        <img
          src={require(`../../assets/image/error-404.png`)}
          alt="404"
          width={380}
        />
      </Typography>
      <Typography align="center" color="grey" variant="h6" mb={3}>
        sorry,page not found
      </Typography>

      <Button
        onClick={() => navigate("/")}
        size="small"
        // sx={{ width: "100%" }}
        variant="contained"
        color="info"
        fullwidth
      >
        Back to Dashboard
      </Button>
    </Typography>
  );
};

export default NotFound;

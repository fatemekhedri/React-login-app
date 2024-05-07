import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

function AuthenticationLayout() {
  return (
    <Box
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={"default"}
      sx={{ overflowX: "hidden" }}
    >
      <Outlet />
    </Box>
  );
}

export default AuthenticationLayout;
